import {Container} from "../../UI/Base/Container/Container.js";

export class ListView {
    constructor({className}) {
        this.className = className;
    }

    update(movies) {
        this.list.innerHTML = '';
        this.render(movies);
    }

    render(movies) {
        console.log(movies);
        movies.length ? this.container.style.display = 'flex' : this.container.style.display = 'none'
        if (!movies || !movies.length) return;
        movies.forEach(movie => {
            this.list.appendChild(movie);
        });
    }

    mount(root) {
        this.container = Container.create({root, className:['container'], tag: 'div'});
        this.list = Container.create({
            tag: 'div',
            root: this.container,
            className: [this.className],
        });
        this.update([])
    }
}
