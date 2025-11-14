import fetchService from "../../core/FetchService.js";
import observer from "../../core/Observer.js";

export class MoviesModel {
    constructor(options){
        const {observerKey} = options;
        this.observerKey = observerKey;
    }

    async loadFilms(url, name) {
                const movies = await fetchService.loadFilms(url);
                console.log(movies)
                observer.notify(this.observerKey, {name:name, movies: movies});
    }

}