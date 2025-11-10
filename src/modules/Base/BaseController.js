export class BaseController {
    constructor(model) {
        this.model = model;
    }

    getMovies(url) {
        this.model.loadFilms(url);
    }

    async getMovie(id) {
        const movies = await this.model.getMovie(id);
        const movie = movies && movies.length > 0 ? movies[0] : null;
        const screenshots = await this.model.getMovieScreenshots(id);
        return [movie, screenshots];
    }
}