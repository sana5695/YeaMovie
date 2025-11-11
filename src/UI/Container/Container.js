export class Container {
    static create(tag, root, className, data) {
        return new Container(tag,root, className, data).render();
    }

    constructor(tag, root, className, data) {
        this.tag = tag;
        this.root = root;
        this.className = className;
        this.data = data;
    }

    createButton() {
        this.container = document.createElement(this.tag);
        if (this.className) this.container.className = this.className;
        if (this.data) this.container.dataset.id = this.data;
    }

    render() {
        this.createButton();
        this.root.appendChild(this.container);
        return this.container;
    }
}