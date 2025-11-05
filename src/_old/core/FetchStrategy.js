export class FetchStrategy {
    constructor(movieService, config) {
        this.movieService = movieService;
        this.config = config
    }

    getStrategy(type) {
        return () => this.movieService.getMovies(this.config[`${type}`]);
    }

}
