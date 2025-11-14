import {BaseController} from "../Base/BaseController.js";
import buildModules from "../../core/BuildModules.js";
import {NavButtons} from "../../UI/NavButtons/NavButtons.js";
import {CardFactory} from "../../core/CardFactory.js";
import observer from "../../core/Observer.js";

export class MoviesController extends BaseController {
    constructor(model, view, observerId) {
        super(model, view, observerId)
        observer.subscribe(this.observerKey, this.getData.bind(this));

    }

    initialize(options){
        const {
            displayModule,
            filterModule,
            dataSources = [],
            root = document.querySelector('main'),
        } = options;

        this.displayModule = buildModules.createModule(displayModule);
        if(filterModule) {
            this.filterModule = buildModules.createModule(filterModule);
            this.filterObserverKey = this.filterModule.observerKey
        }
        this.dataSources = dataSources;
        if (dataSources.length > 1) this.navButtons = NavButtons.create({data: this.dataSources, observerKey: this.observerKey});
        this.root = root;
        this.typeCards = displayModule;

        this.mount({
            root:this.root,
            displayModule:this.displayModule,
            navButtons:this.navButtons,
            filterModule:this.filterModule
        })

        observer.subscribe(this.filterObserverKey, this.getData.bind(this));

        console.log(this.view.displayModule.view.container)

        this.cardListener(this.view.displayModule.view.container);

        this.getData(dataSources[0]);

    }

    async getData(data) {
        console.log(this.model.state)

        if (!data) return;
        if (data.url) {
            console.log(data.url)
            const cached = this.model.state.get(data.name);
            this.movies = cached ?? await this.model.getData(data);
            this.createCards(this.movies);
        } else {
            this.createCards([]);
        }

    }

    createCards(moviesData) {
        const movieCards = moviesData.map(movie =>
            CardFactory.createCard(movie, this.typeCards)
        );
        this.update(movieCards);
    }

    cardListener(location) {
        location.addEventListener('click', event => {
            console.log(1)
            if (event.target.closest('.card')) {
                const id = event.target.closest('.card').dataset.id
                console.log(this.movies )
                const movie = this.movies.filter(x => x.id.toString() === id)[0]
                observer.notify('OPEN_MODAL', movie)
            }
        });
    }

}