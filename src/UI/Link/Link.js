import {BaseUi} from "../Base/BaseUi.js";

export class Link extends BaseUi {
    static create(options) {
        return new Link(options).render();
    }

    constructor(options) {
        super(options);
    }


    createElem() {
        this.elem = document.createElement('a');
    }

    createOptions() {
        super.createOptions()
        this.elem.href = this.href;
    }
}