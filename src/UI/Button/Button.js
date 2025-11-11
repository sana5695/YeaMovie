export class Button {
    static create(text, root, className, data) {
        return new Button(text, root, className, data).render();
    }

    constructor(text, root, className, data) {
        this.text = text;
        this.root = root;
        this.className = className;
        this.data = data;
    }

    createButton() {
        this.button = document.createElement('button');
        this.button.textContent = this.text;
        if (this.className) this.button.className = this.className;
        if (this.data) this.button.dataset.id = this.data;
    }

    render() {
        this.createButton();
        this.root.appendChild(this.button);
        return this.button;
    }
}