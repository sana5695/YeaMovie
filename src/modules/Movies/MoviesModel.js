import fetchService from "../../core/FetchService.js";
import observer from "../../core/Observer.js";

export class MoviesModel {
    constructor(options){
        const {observerKey} = options;
        this.observerKey = observerKey;
    }

    async loadFilms(url) {
                const movies = await fetchService.loadFilms(url);
                observer.notify(this.observerKey, movies);
    }

}