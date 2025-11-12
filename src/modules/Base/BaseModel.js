export class BaseModel {
    constructor(options) {
        const {observer, movieService} = options
        this.observer = observer;
        this.movieService = movieService;
    }

    setMovies(movies) {
        this.observer.setState(movies);
    }

    getMovies() {
        return this.observer.getState();
    }
}
