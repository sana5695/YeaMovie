import {BaseUi} from "../Base/BaseUi.js";

export class Input extends BaseUi {
    static create(options) {
        return new Input(options).render();
    }

    constructor(options) {
        super(options);
    }

    createElem() {
        this.elem = document.createElement('input');
    }

    createOptions() {
        this.elem.type = "text";
        this.elem.setAttribute("placeholder", this.text);
        if (this.className) this.elem.classList.add(...this.className)
        if (this.data) this.elem.id = this.data;
    }
}