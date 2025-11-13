export class ModalController {
    constructor (model) {
        this.model = model;
    }

    async getMovieScreenshots(id){
        return await this.model.getMovieScreenshots(id)
    }
}