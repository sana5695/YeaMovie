import {BaseController} from "../Base/BaseController.js";

export class ListController extends BaseController {
    constructor(model) {
        super(model);
    }

    handleExpand(list, text) {
        return this.model.expand(list, text);
    }
}