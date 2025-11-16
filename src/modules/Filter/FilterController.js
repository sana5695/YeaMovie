import {BaseController} from "../Base/BaseController.js";

export class FilterController extends BaseController {
    constructor(model, view) {
        super(model, view)
    }

    mount(root) {
        this.view.mount(root)
    }
}