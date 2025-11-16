import {BaseController} from "../Base/BaseController.js";
import config from "../../core/config.js";
import store from "../../core/Strore.js";

export class SearchController extends BaseController {
    constructor(model, view) {
        super(model, view)

        this.view.onSearch = this.handleSearch.bind(this);
        this.view.onBack = this.handleBack.bind(this);
    }

    handleSearch(url) {
        store.delete('Search');
        console.log(store.store);
        this.view.showBackButton();
        this.load({name:'Search', url: config.URL_SEARCH + encodeURIComponent(url)});
    }

    handleBack() {
        this.view.hideBackButton();
        this.view.clear();
    }
}