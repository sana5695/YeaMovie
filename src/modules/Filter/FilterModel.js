import {BaseModel} from "../Base/BaseModel.js";

export class FilterModel extends BaseModel {
    constructor(movieService, observer, config) {
        super(movieService, observer, config);
    }

    async getFilters() {
        return await this.movieService.getFilters()
    }
}