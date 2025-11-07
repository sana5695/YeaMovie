import {CardFactory} from "../../core/CardFactory.js";
import {Button} from "../Button/Button.js";

export class BaseView {
    constructor(controller, observer, root, data) {
        this.root = root;
        this.observer = observer;
        this.controller = controller;
        this.data = data;
        this.navigation = document.createElement('nav')

        this.buttonMap = new Map()
        this.observer.subscribe((movies) => this.update(movies));
        this.container = document.createElement('div');
    }

    createNavButtons(btns, selector, className) {
        for( let btn of btns) {
            const button = Button.create(btn.name, selector, className);
            this.buttonMap.set(button, btn.url);
        }
    }

    navListener(location) {
        location.addEventListener('click', event => {
            this.onLoadMoviesClick(this.buttonMap.get(event.target));
        })
    }

    onLoadMoviesClick = (url) => {
        this.controller.getMovies(url)
    }

    bindListeners() {
    }

    update(movies) {
        this.render(movies);
    }

    render(movies) {
        const movieCardsHtml = movies.map(movie => {
            return CardFactory.createCard(movie, this.size).render();
        });
        this.container.innerHTML = movieCardsHtml.join('');
    }

    mount() {
    }
}