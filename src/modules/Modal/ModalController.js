import {BaseController} from "../Base/BaseController.js";
import store from "../../core/Strore.js";

export class ModalController extends BaseController {
    constructor(model, view) {
        super(model, view)
        this.view.openModal = this.handleOpenModal.bind(this)
    }


    async handleOpenModal(card) {
        console.log(card)
        const id = card.dataset.id;
        console.log(id)
        const movie = store.find(id);
        console.log(movie);
        const screenshots = await this.model.getMovieScreenshots(id);
        this.view.showModal({
            movie,
            screenshots
        });
    }



}
