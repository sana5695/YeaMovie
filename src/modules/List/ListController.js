export class ListController {
    constructor(model) {
        this.model = model;
    }

    getMovies(url) {
        this.model.films(url)
    }

    handleExpand(list, text) {
        return this.model.expand(list, text);
    }
}