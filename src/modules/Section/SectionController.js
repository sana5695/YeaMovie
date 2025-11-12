import {SectionModel} from "./SectionModel.js";

export class SectionController {
    constructor(options){
        this.model = new SectionModel(options);

    }

    getMovies(data) {
        if(data) this.model.loadFilms(data)
    }
}