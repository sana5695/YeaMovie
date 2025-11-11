import {BaseView} from "../Base/BaseView.js";
import {Button} from "../../UI/Button/Button.js";
import {Container} from "../../UI/Container/Container.js";

export class SliderView extends BaseView {
    constructor(options) {
        super(options);
        this.size = 'big';
        this.slideIndex = 0;
        this.slides = [];
        this.observer.subscribe(() => this.updateSlides());
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

    createArrows() {
        this.arrowsContainer = Container.create({
            tag: 'div',
            root: this.section,
            className: ['arrows-container']
        })
        Button.create({
            text: '<',
            root: this.arrowsContainer,
            listener: () => this.onChangeSlide('Prev'),
            className: ['arrow']
        })
        ;
        Button.create({
            text: '>',
            root: this.arrowsContainer,
            listener: () => this.onChangeSlide('Next'),
            className: ['arrow']
        });
    }

    mount() {
        super.mount()
        this.createArrows()
        this.bindListeners();
    }
}