import {BaseModel} from "../Base/BaseModel.js";

export class SearchModel extends BaseModel{
    constructor(options) {
        super(options);
    }

    async search(text) {
        const rawMovies = await this.movieService.searchMovies(text)
        const movies = this.formatMovies(rawMovies.films)
        this.observer.setState(movies)
    }
}

