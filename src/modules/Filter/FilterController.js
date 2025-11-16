import {BaseController} from "../Base/BaseController.js";
import fetchService from "../../core/FetchService.js";
import config from "../../core/config.js";
import store from "../../core/Strore.js";

export class FilterController extends BaseController {
    constructor(model, view) {
        super(model, view)
        this.view.onApplyFilters = this.handleApplyFilters.bind(this);
    }

    async init() {
        const filtersData = await fetchService.getFilters();
        this.model.filters = filtersData;
        this.view.createFilters(filtersData);
    }

    handleApplyFilters(selectedFilters) {
        const params = [];
        if (selectedFilters.country !== '0') params.push(`countries=${selectedFilters.country}`);
        if (selectedFilters.genre !== '0') params.push(`genres=${selectedFilters.genre}`);
        params.push(
            `ratingFrom=${selectedFilters.ratingFrom}`,
            `ratingTo=${selectedFilters.ratingTo}`,
            `yearFrom=${selectedFilters.yearFrom}`,
            `yearTo=${selectedFilters.yearTo}`
        );
        store.delete('Filter');
        this.load({name: 'Filter',url: `${config.MOVIE_DATA}?${params.join('&')}`});
    }

    mount(root) {
        super.mount(root);
        this.init()
    }
}