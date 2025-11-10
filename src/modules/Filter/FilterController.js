import {BaseController} from "../Base/BaseController.js";

export class FilterController extends BaseController {
    constructor(model) {
        super(model);
    }

    async getFilters() {
        return await this.model.getFilters();
    }
}