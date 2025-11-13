export class BaseModel {
    constructor(options) {
        const {observer} = options
        this.observer = observer;
    }

    setMovies(movies) {
        this.observer.setState(movies);
    }

    getMovies() {
        return this.observer.getState();
    }
}
