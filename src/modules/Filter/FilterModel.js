import {BaseModel} from "../Base/BaseModel.js";
import fetchService from "../../core/FetchService.js";

export class FilterModel extends BaseModel {
    constructor(options) {
        super(options);
    }

    async getFilters() {
        return await fetchService.getFilters()
    }
}