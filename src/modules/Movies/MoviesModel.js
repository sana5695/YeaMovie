import fetchService from "../../core/FetchService.js";

export class MoviesModel {
    constructor(options){
        const {observer} = options;
        this.observer = observer;
    }

    async loadFilms(url) {
                const movies = await fetchService.loadFilms(url);
                this.observer.setState(movies);
    }

}