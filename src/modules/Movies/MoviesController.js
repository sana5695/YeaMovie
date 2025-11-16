import {BaseController} from "../Base/BaseController.js";
import {NavButtons} from "../../UI/NavButtons/NavButtons.js";
import {CardFactory} from "../../core/CardFactory.js";

export class MoviesController extends BaseController {
    constructor(model, view, observerId, options) {
        super(model, view, observerId, options)
        const {
            displayModule,
            filterModule = null,
            dataSources = [],
            root = document.querySelector('main'),
        } = options;

        this.displayModule = displayModule
        this.filterModule = filterModule
        this.dataSources = dataSources;
        this.root = root;

        if (this.filterModule){
            this.filterModule.view.load = this.getData.bind(this);
            this.filterModule.view.clear = this.clear.bind(this);
        }

        if (dataSources.length > 0) {
            this.navButtons = NavButtons.create({data: this.dataSources});
            this.navButtons.onData = this.onData.bind(this);
            this.getData(dataSources[0]);
        }




        this.mount({
            root:this.root,
            displayModule:this.displayModule,
            navButtons:this.navButtons,
            filterModule:this.filterModule
        })
    }

    async getData(data) {
        if (data && data.url) this.createCards(await this.model.getData(data));
    }

    clear(){
        this.displayModule.clear();
    }

    createCards(moviesData) {
        const movieCards = moviesData.map(movie =>
            CardFactory.createCard(movie, this.displayModule.type)
        );
        this.update(movieCards);
    }

    onData(data) {
        this.getData(data)
    }
}