import {BaseController} from "../Base/BaseController.js";

export class SliderController extends BaseController {
    constructor(model, view) {
        super(model, view)
        this.type = 'slider'
        this.view.onChangeSlide = this.handleChangeSlide.bind(this)

    }

    handlePreviousSlide() {
        return this.model.previousSlideIndex();
    }

    handleNextSlide() {
        return this.model.nextSlideIndex()
    }

    handleChangeSlide(direction) {
        if (direction === 'Prev') this.view.visibleSlide(this.handlePreviousSlide())
        else this.view.visibleSlide(this.handleNextSlide())
    }

    update(options) {
        super.update(options);
        this.model.updateSlides(options.length)
    }
}