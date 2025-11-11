import {BaseView} from "../Base/BaseView.js";
export class ListView extends BaseView {
    constructor(controller, observer, section ,root, data, modal, config) {
        super(controller, observer, section ,root, data, modal, config);
    }

    mount() {
        super.mount()
        this.bindListeners();
    }
}