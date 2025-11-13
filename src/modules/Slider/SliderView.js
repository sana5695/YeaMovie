import {BaseView} from "../Base/BaseView.js";
import {Button} from "../../UI/Base/Button/Button.js";
import {Container} from "../../UI/Base/Container/Container.js";

export class SliderView extends BaseView {
    constructor(options) {
        super(options);
        this.type = this.type || 'big';
        this.slideIndex = 0;
        this.slides = [];
        this.observer.subscribe(() => this.updateSlides());
    }

    updateSlides() {
        this.slides = Array.from(this.container.querySelectorAll('.card'));
        this.slideIndex = 0;
        this.updateSlider();
    }

    updateSlider() {
        this.slides.forEach((slide, index) => {
            slide.style.display = index === this.slideIndex ? "flex" : "none";
        });
    }

    onChangeSlide(direction) {
        if (direction === 'Prev')
            this.slideIndex = this.controller.handlePreviousSlide(this.slideIndex);
        else
            this.slideIndex = this.controller.handleNextSlide(this.slideIndex);
        this.updateSlider();
    }

    mount(root,parentClassName) {
        this.arrows = Container.create({
            tag: 'div',
            root: root,
            className: ['slider-container']
        });
        Button.create({
            text: '<',
            root: this.arrows,
            listener: () => this.onChangeSlide('Prev'),
            className: ['arrow']
        });
        super.mount(this.arrows ,parentClassName);
        Button.create({
            text: '>',
            root: this.arrows,
            listener: () => this.onChangeSlide('Next'),
            className: ['arrow']
        });
    }
}