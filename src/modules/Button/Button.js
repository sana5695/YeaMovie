export class Button {

    static create(text, selector, className, data) {
        return new Button(text, selector, className, data).render();
    }

    constructor(text, selector, className, data) {
        this.text = text;
        this.selector = `.${selector.split(' ')[0]}`;
        this.className = className;
        this.data = data;
    }

    create() {
        this.button = document.createElement('button');
        this.button.innerText = this.text;
        if(this.className) this.button.className = this.className;
        if(this.data) this.button.dataset.id = this.data;
    }

    render() {
        this.create()
        document.querySelector(this.selector).appendChild(this.button);
        return this.button;
    }
}