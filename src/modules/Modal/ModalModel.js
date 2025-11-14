import fetchService from "../../core/FetchService.js";

export class ModalModel {
    constructor() {}

    async getMovieScreenshots(id) {
        return  fetchService.getMovieScreenshots(id)
    }
}