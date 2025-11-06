import {FilterSelectView} from "../modules/Select/FilterSelectView.js";

export class SelectFactory {
    static createSelect(text, location = 'filter', data = '') {
        if (location === "filter") return new FilterSelectView(data, text).mount();
    }
}
