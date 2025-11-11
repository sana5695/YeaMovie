import {CardFactory} from "../../core/CardFactory.js";
import {Button} from "../../UI/Button/Button.js";
import {Container} from "../../UI/Container/Container.js";

export class BaseView {
    constructor(controller, observer, section ,root, data, modal, config) {
        this.root = root
        this.observer = observer;
        this.controller = controller;
        this.data = data;
        this.modal = modal;
        this.size = 'small';
        this.config = config;
        this.sectionClassName = section;

        this.observer.subscribe((movies) => this.update(movies));
    }

    bindListeners() {
        if (this.data.length > 1) this.navListener(this.navigation);
        this.cardListener(this.container);
    }

    createNavButtons() {
        if (this.data.length > 1) {
            this.buttonMap = new Map();
            this.navigation = Container.create('nav', this.section, `${this.sectionClassName}__nav`)
            for (let buttonData of this.data) {
                const button = Button.create(buttonData.name, this.navigation);
                this.buttonMap.set(button, buttonData.url);
            }
        }
    }

    navListener(location) {
        location.addEventListener('click', event => {
            this.onLoadMovies(this.buttonMap.get(event.target));
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

    onLoadMovies = (url) => {
        if (url) this.controller.getMovies(url)
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
        this.section = Container.create('section', this.root, this.sectionClassName);
        this.container = Container.create('div', this.section, `${this.sectionClassName}__container`);
        this.createNavButtons();
        this.onLoadMovies(this.data[0]?.url)
    }
}