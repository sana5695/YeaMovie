import {BaseModel} from "../Base/BaseModel.js";
import fetchService from "../../core/FetchService.js";

export class SearchModel extends BaseModel{
    constructor(options) {
        super(options);
    }

    async search(text) {
        this.observer.setState(await fetchService.search(text))
    }
}

