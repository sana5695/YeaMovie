import {ButtonFactory} from "../../core/ButtonFactory.js";
import {CardFactory} from "../../core/CardFactory.js";

export class BaseView {
    constructor(controller, observer, root, urls) {
        this.root = root;
        this.observer = observer;
        this.controller = controller;
        this.urls = urls;
        this.navigation = document.createElement('nav')

        this.buttonMap = new Map()
        this.observer.subscribe((movies) => this.update(movies));
        this.container = document.createElement('div');
    }

    createButtons(btns, location) {
        for( let btn of btns ) {
            const button = ButtonFactory.createButton(btn.name, location);
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