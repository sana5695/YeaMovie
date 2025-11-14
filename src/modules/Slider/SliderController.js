import {BaseController} from "../Base/BaseController.js";

export class SliderController extends BaseController {
    constructor(model, view) {
        super(model, view)
         this.view.onChangeSlide = this.handleChangeSlide.bind(this)

    }
    handlePreviousSlide() {
        return this.model.previousSlideIndex();
    }

    handleNextSlide() {
        return this.model.nextSlideIndex();
    }

    handleChangeSlide(direction) {
        if (direction === 'Prev') this.handlePreviousSlide();
        else this.handleNextSlide();
        this.visibleSlide();
    }

    visibleSlide() {
        this.model.slides.forEach((slide, index) => {
            this.view.updateSlide(slide ,index === this.model.slideIndex ? "flex" : "none")
        });
    }

    update(options) {
        super.update(options);
        this.model.updateSlides(options)
        this.visibleSlide(this.model.slides);
    }
}