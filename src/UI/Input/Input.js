export class Input {
    static create(text, root, className, data) {
        return new Input(text, root, className, data).render();
    }

    constructor(text, root, className, data) {
        this.text = text;
        this.root = root;
        this.className = className;
        this.data = data;
    }

    createButton() {
        this.input = document.createElement("input");
        this.input.type = "text";
        this.input.setAttribute("placeholder", this.text);
        if (this.className) this.input.className = this.className;
        if (this.data) this.input.dataset.id = this.data;
    }

    render() {
        this.createButton();
        this.root.appendChild(this.input);
        return this.input;
    }
}