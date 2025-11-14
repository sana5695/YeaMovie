import {BaseController} from "../Base/BaseController.js";

export class FilterController extends BaseController {
    constructor(model, view, observerId) {
        super(model, view)
        this.observerKey = `FILTER__${observerId}`
    }



    mount(root) {
        this.view.mount(root, this.observerKey)
    }
}