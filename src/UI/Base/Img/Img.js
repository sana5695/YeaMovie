import {BaseUi} from "../BaseUi.js";

export class Img extends BaseUi {
    static create(options) {
        return new Img(options).render();
    }

    constructor(options) {
        super(options);
    }

    createElem() {
        this.elem = document.createElement('img');
    }

    createOptions() {
        super.createOptions();
        this.elem.alt = this.alt;
        this.elem.src = this.src;
        this.elem.loading = 'lazy';
    }
}