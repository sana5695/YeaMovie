import {BaseModel} from "../Base/BaseModel.js";

export class SearchModel extends BaseModel{
    constructor(movieService, observer, config) {
        super(movieService, observer, config);
    }

    async search(text) {
        const rawMovies = await this.movieService.searchMovies(text)
        const movies = this.formatMovies(rawMovies.films)
        this.observer.setState(movies)
    }
}

