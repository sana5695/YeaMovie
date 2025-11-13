import {Container} from "../../UI/Base/Container/Container.js";

export class ListView {
    constructor({ controller, className, observerid }) {
        this.controller = controller;
        this.className = className;
        this.observerid = observerid;
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

    mount(root) {
        this.container = Container.create({
            tag: 'div',
            root: root,
            className: [this.className],
        });
    }
}
