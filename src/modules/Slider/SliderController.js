export class SliderController{
    constructor(model) {
        this.model = model;
    }
    handlePreviousSlide(index) {
        return this.model.previousSlideIndex(index);
    }

    handleNextSlide(index) {
        return this.model.nextSlideIndex(index);
    }
}