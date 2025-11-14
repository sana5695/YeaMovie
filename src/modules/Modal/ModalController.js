import observer from "../../core/Observer.js";
import {BaseController} from "../Base/BaseController.js";

export class ModalController extends BaseController {
    constructor(model, view) {
        super(model, view)
        observer.subscribe('OPEN_MODAL', this.handleOpenModal.bind(this));
    }


    async handleOpenModal(movie) {
        if (!movie) return;
        const screenshots = await this.model.getMovieScreenshots(movie.id);

        this.view.showModal({
            movie,
            screenshots
        });
    }
}
