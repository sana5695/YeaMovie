import {CardFactory} from "../../core/CardFactory.js";
import {Container} from "../../UI/Base/Container/Container.js";
import buildModules from "../../core/BuildModules.js";

export class ModalView {
    constructor({className}) {
        this.className = className;
        this.screenshotsSlider = buildModules.createModule('slider');
    }

    bindListeners() {
        document.body.addEventListener('click', (event) => {
            if (event.target === this.modal) this.hideModal();
        });
    }

    showModal({movie, screenshots}) {
        this.modalContent.innerHTML = '';

        CardFactory.createCard(movie, 'modal__movie', this.modalContent);

        if (screenshots.length > 0) {
            const screenshotCards = screenshots.map(
                s => CardFactory.createCard(s, 'screenshot')
            );

            this.screenshotsSlider.mount(this.modalContent, 'modal');
            this.screenshotsSlider.update(screenshotCards);
        }

        this.modal.style.display = "block";
    }

    hideModal() {
        this.modalContent.innerHTML = '';
        this.modal.style.display = "none";
    }

    mount() {
        this.modal = Container.create({
            tag: 'div',
            className: [this.className],
            root: document.body
        });
        this.modalContent = Container.create({
            tag: 'div',
            className: ['modal-content'],
            root: this.modal
        });
        this.bindListeners();
    }
}
