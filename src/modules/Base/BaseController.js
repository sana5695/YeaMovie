export class BaseController {
    constructor(model) {
        this.model = model;
    }

    setMovies(movies) {
        this.model.setMovies(movies);
    }

    getMovies() {
        return this.model.getMovies();
    }
}
