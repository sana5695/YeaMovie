import {CardFactory} from "../../core/CardFactory.js";
import {ModalController} from "./ModalController.js";
import {Container} from "../../UI/Base/Container/Container.js";
import {ModalModel} from "./ModalModel.js";
import observer from "../../core/Observer.js";

export class ModalView {
    constructor(screenshots) {
        this.screenshots = screenshots;
        this.mount()
        this.controller = new ModalController(new ModalModel())
        observer.subscribe('OPEN_MODAL', this.openModal.bind(this));
    }

    async openModal(movie) {
        if (!movie) {
            return;
        }
        console.log(movie)
        CardFactory.createCard(movie, 'modal__movie', this.modalContent).render()
        const screenshots = await this.getMovieScreenshots(movie.id)
        if (screenshots.length !== 0){
            this.screenshots.mount(this.modalContent, 'modal')
            this.screenshots.render(screenshots);
        }
        this.modal.style.display = "block";
    }


    bindListeners() {
        document.body.addEventListener('click', this.handleOverlayClick);
    }

    handleOverlayClick = (event) => {
        if (event.target === this.modal) {
            this.closeModal();
        }
    }

    async getMovieScreenshots(id) {
        const screenshots = await this.controller.getMovieScreenshots(id)
        return screenshots.map(screenshot => CardFactory.createCard(screenshot, 'screenshot').render())
    }

    closeModal() {
        this.modalContent.innerHTML = '';
        this.modal.style.display = "none";
    }

    mount(){
        this.modal = Container.create({
            tag:'div',
            className:['modal'],
            root: document.body
        })
        this.modalContent = Container.create({
            tag:'div',
            className:['modal-content'],
            root: this.modal
        })

        this.bindListeners();

        return this.modal
    }
}