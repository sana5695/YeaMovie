import { CardFactory } from "../../core/CardFactory.js";
import { Container } from "../../UI/Base/Container/Container.js";

export class BaseView {
    constructor({ controller, observer, className, config ,modal, type = ''}) {
        this.controller = controller;
        this.observer = observer;
        this.className = className;
        this.config = config;
        this.modal = modal;
        this.type = type;

        this.observer.subscribe((movies) => this.update(movies));
    }



    update(movies) {
        this.render(movies);
    }

    render(movies) {
        if (!this.container) return;
        this.container.innerHTML = '';
        if (!movies || !movies.length) return;
        movies.forEach(movie => {
            CardFactory.createCard(movie, this.type, this.container).render();
        });
    }

    cardListener(location) {
        location.addEventListener('click', event => {
            if (event.target.closest('.card')) {
                const id = event.target.closest('.card').dataset.id
                const movie = this.observer.getState().filter(x => x.id.toString() === id)[0]
                //this.controller.getMovie(id).then(([movie, screenshots]) => {
                    this.modal.openModal(movie)
               // })
            }
        });
    }

    mount(root, parentClassName) {
        this.container = Container.create({
            tag: 'div',
            root: root,
            className: [this.className,`${parentClassName}__container`],
        });
        this.cardListener(this.container)
    }
}
