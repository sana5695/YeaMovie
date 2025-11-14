import {MoviesModel} from "./MoviesModel.js";

export class MoviesController {
    constructor(options){
        this.model = new MoviesModel(options);

    }

    getMovies(data, name) {
        if(name) this.model.loadFilms(data, name);
    }
}