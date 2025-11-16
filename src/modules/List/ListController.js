import {BaseController} from "../Base/BaseController.js";

export class ListController extends BaseController {
    constructor(model, view) {
        super(model, view)
        this.type = 'list'
    }
}