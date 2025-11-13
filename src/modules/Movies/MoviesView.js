import {Container} from "../../UI/Base/Container/Container.js";
import {MoviesController} from "./MoviesController.js";
import {NavButtons} from "../NavButtons/NavButtons.js";
import {CardFactory} from "../../core/CardFactory.js";
import observer from "../../core/Observer.js";

export class MoviesView {
    static create(options) {
        return new MoviesView(options).render();
    }

    constructor(options) {
        const {className, view, data = [], filter, type} = options;
        this.className = className;
        this.view = view;
        this.data = data;
        this.root = document.querySelector('main');
        this.filter = filter;
        this.type = type;
        this.id = Math.random().toString(36).substr(2, 9);
        this.LoadMoviesKey = `LOAD_MOVIES${this.id}`
        this.GetMoviesKey = `GET_MOVIES${this.id}`
        this.controller = new MoviesController({observerKey:this.LoadMoviesKey})

        observer.subscribe(this.LoadMoviesKey, this.update.bind(this));
        observer.subscribe(this.GetMoviesKey, this.onLoadMovies);

    }

    update(movies) {
        this.view.update(this.renderCard(movies));
    }

    renderCard(movies) {
        if (movies && movies.length) {
            return movies.map(movie => CardFactory.createCard(movie, this.type).render());
        }   else return null;
    }

    onLoadMovies = (url) => {
        if (url) this.controller.getMovies(url)
        else this.update()
    }

    cardListener(location) {
        location.addEventListener('click', event => {
            if (event.target.closest('.card')) {
                const id = event.target.closest('.card').dataset.id
                const movie = observer.getState(this.LoadMoviesKey).filter(x => x.id.toString() === id)[0]
                observer.notify('OPEN_MODAL', movie)
            }
        });
    }

    render() {
        this.section = Container.create({
            tag: 'section',
            root: this.root,
            className: [this.className],
        });

        this.cardListener(this.section)

        if (this.filter) {
            const filterKey = this.filter.mount(this.section);
            observer.subscribe(filterKey, this.onLoadMovies)
        }
        if (this.data.length > 1) NavButtons.create({root: this.section, data: this.data, observerKey: this.GetMoviesKey});

        this.view.mount(this.section, this.className);
        this.onLoadMovies(this.data[0]?.url)
    }
}