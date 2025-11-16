export class SliderModel {
    constructor() {
        this.slideCount = 0;
        this.slideIndex = 0;
    }

    updateSlides(slideCount) {
        this.slideCount = slideCount;
        this.slideIndex = 0;
    }

    previousSlideIndex() {
       return this.slideIndex = ( this.slideIndex - 1 + this.slideCount) % this.slideCount;
    }

    nextSlideIndex() {
        return this.slideIndex = (this.slideIndex + 1) % this.slideCount;
    }
}