import {BaseController} from "../Base/BaseController.js";

export class SearchController extends BaseController {
    constructor(model) {
        super(model);
    }

    handleSearch(text) {
        return this.model.search(text);
    }


}