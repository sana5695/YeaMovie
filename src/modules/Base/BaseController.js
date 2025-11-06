export class BaseController {
    constructor(model) {
        this.model = model;
    }

    getMovies(url) {
        this.model.films(url)
    }
}