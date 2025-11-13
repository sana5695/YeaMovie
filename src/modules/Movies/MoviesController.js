import {MoviesModel} from "./MoviesModel.js";

export class MoviesController {
    constructor(options){
        this.model = new MoviesModel(options);

    }

    getMovies(data) {
        if(data) this.model.loadFilms(data)
    }
}