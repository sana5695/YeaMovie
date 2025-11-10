import {CardFactory} from "../../core/CardFactory.js";
import {Button} from "../../UI/Button/Button.js";

export class BaseView {
    constructor(controller, observer, root, data, modal) {
        this.root = document.createElement("section");
        this.root.classList.add(root);

        this.observer = observer;
        this.controller = controller;
        this.data = data;
        this.modal = modal;
        this.size = 'small';


        this.buttonMap = new Map();

        this.container = document.createElement('div');
        this.container.classList.add(`${this.root.className}__container`);

        this.navigation = document.createElement('nav');
        this.navigation.className = `${this.root.className}__nav`;

        this.observer.subscribe((movies) => this.update(movies));
    }

    createNavButtons(buttons, selector, className) {
        if (buttons.length > 1) {
            for (let buttonData of buttons) {
                const button = Button.create(buttonData.name, selector, className);
                this.buttonMap.set(button, buttonData.url);
            }
        }
    }

    navListener(location) {
        location.addEventListener('click', event => {
            this.onLoadMoviesClick(this.buttonMap.get(event.target));
        })
    }

    cardListener(location) {
        location.addEventListener('click', event => {
            if (event.target.closest('.card')) {
                const id = event.target.closest('.card').dataset.id
                this.controller.getMovie(id).then(([movie, screenshots]) => {
                    this.modal.openModal(movie, screenshots)
                })
            }
        });
    }

    onLoadMoviesClick = (url) => {
        this.controller.getMovies(url)
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
}