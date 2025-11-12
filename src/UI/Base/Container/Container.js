import {BaseUi} from "../BaseUi.js";

export class Container extends BaseUi {
    static create(options) {
        return new Container(options).render();
    }

    constructor(options) {
        super(options);
    }
}