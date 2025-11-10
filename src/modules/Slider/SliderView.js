import {BaseView} from "../Base/BaseView.js";
import {Button} from "../../UI/Button/Button.js";

export class SliderView extends BaseView {
    constructor(controller, observer, root, data, modal) {
        super(controller, observer, root, data, modal);

        this.size = 'big';
        this.slideIndex = 0;
        this.slides = [];

        this.observer.subscribe(() => this.updateSlides());
    }

    bindListeners() {
        this.navListener(this.navigation);
        this.cardListener(this.container);
        this.prevButton.addEventListener('click', () => this.onChangeSlide('Prev'));
        this.nextButton.addEventListener('click', () => this.onChangeSlide('Next'));
    }

    onChangeSlide = (direction) => {
        if (direction === 'Prev') {
            this.slideIndex = this.controller.handlePreviousSlide(this.slideIndex);
        } else if (direction === 'Next') {
            this.slideIndex = this.controller.handleNextSlide(this.slideIndex);
        }
        this.updateSlider();
    }

    updateSlider() {
        this.slides.forEach((slide, index) => {
            slide.style.display = index === this.slideIndex ? "flex" : "none";
        });
    }

    updateSlides() {
        this.slides = Array.from(this.container.querySelectorAll('.card.big'));
        this.updateSlider();
    }

    mount() {
        this.controller.getMovies(this.data[0].url);
        document.querySelector('main').appendChild(this.root)
        this.arrowsContainer = document.createElement('div');
        this.arrowsContainer.className = `${this.root.className}__arrows-container`;
        this.root.append(this.navigation, this.container, this.arrowsContainer);

        this.createNavButtons(this.data, this.navigation.className, 'nav');

        this.prevButton = Button.create('<', this.arrowsContainer.className, 'arrow', 'Prev');
        this.nextButton = Button.create('>', this.arrowsContainer.className, 'arrow', 'Next');

        this.bindListeners();
    }
}