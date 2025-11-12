import {BaseUi} from "../BaseUi.js";

export class Button extends BaseUi{
    static create(options) {
        return new Button(options).render();
    }

    constructor(options) {
        super(options);
        console.log(options);
    }

    createElem() {
        this.elem = document.createElement('button');
    }

    createOptions() {
        super.createOptions();
        if (this.listener) this.bindListeners(this.listener);
    }

    bindListeners(listener) {
        this.elem.addEventListener('click', listener);
    }
}