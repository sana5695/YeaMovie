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
            this.container.appendChild(movie);
        });
    }

    mount(root, parentClassName) {
        this.container = Container.create({
            tag: 'div',
            root: root,
            className: [this.className,`${parentClassName}__container`],
        });
    }
}
