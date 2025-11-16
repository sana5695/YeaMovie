import {BaseController} from "../Base/BaseController.js";
import store from "../../core/Strore.js";

export class ModalController extends BaseController {
    constructor(model, view) {
        super(model, view)
        this.view.onCardClick = this.handleOpenModal.bind(this)
    }


    async handleOpenModal(card) {
        const id = card.dataset.id;
        const movie = store.find(id);
        const screenshots = await this.model.getMovieScreenshots(id);
        this.view.showModal({
            movie,
            screenshots
        });
    }
}
