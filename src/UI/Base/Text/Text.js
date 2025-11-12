import {BaseUi} from "../BaseUi.js";

export class Text extends BaseUi {
    static create(options) {
        return new Text(options).render();
    }

    constructor(options) {
        super(options);
    }
}