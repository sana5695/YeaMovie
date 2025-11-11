import {BaseModel} from "../Base/BaseModel.js";

export class FilterModel extends BaseModel {
    constructor(options) {
        super(options);
    }

    async getFilters() {
        return await this.movieService.getFilters()
    }
}