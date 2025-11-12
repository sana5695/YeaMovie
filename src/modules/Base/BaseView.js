import {Button} from "../../UI/Base/Button/Button.js";
import {Container} from "../../UI/Base/Container/Container.js";
import {CardFactory} from "../../core/CardFactory.js";

export class BaseView {
    constructor(options) {
        const {
            controller,
            observer,
            section,
            root,
            data,
            modal,
            config
        } = options;

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
        this.cardListener(this.container);
    }

    createNavButtons() {
        if (this.data.length > 1) {
            this.buttonMap = new Map();

            this.navigation = Container.create({
                tag: 'nav',
                root: this.section,
                className: [`${this.sectionClassName}__nav`]
            })

            this.data.forEach((buttonData, index) => {
                const classes = ['button', 'nav__button'];
                if (index === 0) {
                    classes.push('active');
                }
                const button = Button.create({
                    text: buttonData.name,
                    root: this.navigation,
                    listener: (event) => this.navListener(event),
                    className: classes
                });
                this.buttonMap.set(button, buttonData.url);
            });
        }
    }

    navListener(event) {
        if (event.target !== this.navigation.querySelector('.active')) {
            const active = event.target
            this.buttonMap.keys().forEach(button => {
                if (button === active) button.classList.add('active');
                else button.classList.remove('active');
            })
            this.onLoadMovies(this.buttonMap.get(event.target));
        }
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
        this.container.innerHTML = '';
        movies.forEach(movie => {
            CardFactory.createCard(movie, this.size, this.container).render();
        });
    }

    mount() {
        this.section = Container.create({
            tag: 'section',
            root: this.root,
            className: [this.sectionClassName]
        });

        this.createNavButtons();
        this.container = Container.create({
            tag: 'div',
            root: this.section,
            className: [`${this.sectionClassName}__container`]
        });

        this.onLoadMovies(this.data[0]?.url)
    }
}