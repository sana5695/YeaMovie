import {BaseView} from "../Base/BaseView.js";
import {Button} from "../../UI/Button/Button.js";
import {Container} from "../../UI/Container/Container.js";

export class SliderView extends BaseView {
    constructor(controller, observer, section ,root, data, modal, config) {
        super(controller, observer, section ,root, data, modal, config);
        this.size = 'big';
        this.slideIndex = 0;
        this.slides = [];
        this.observer.subscribe(() => this.updateSlides());
    }

    bindListeners() {
        super.bindListeners();
        this.prevButton.addEventListener('click', () => this.onChangeSlide('Prev'));
        this.nextButton.addEventListener('click', () => this.onChangeSlide('Next'));
    }

    onChangeSlide = (direction) => {
        if (direction === 'Prev') this.slideIndex = this.controller.handlePreviousSlide(this.slideIndex);
        else if (direction === 'Next') this.slideIndex = this.controller.handleNextSlide(this.slideIndex);
        this.updateSlider();
    }

    updateSlider() {
        this.slides.forEach((slide, index) => {
            slide.style.display = index === this.slideIndex ? "flex" : "none";
        });
    }

    updateSlides() {
        this.slides = Array.from(this.container.querySelectorAll('.card'));
        this.slideIndex = 0;
        this.updateSlider();
    }

    createArrows(){
        this.arrowsContainer = Container.create('div',this.section)
        this.prevButton = Button.create('<', this.arrowsContainer);
        this.nextButton = Button.create('>', this.arrowsContainer);
    }

    mount() {
        super.mount()
        this.createArrows()
        this.bindListeners();
    }
}