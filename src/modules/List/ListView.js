import {BaseView} from "../Base/BaseView.js";
export class ListView extends BaseView {
    constructor(options) {
        super(options);
    }

    mount() {
        super.mount()
        this.bindListeners();
    }
}