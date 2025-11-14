export class SliderModel {
    constructor() {
        this.slideCount = 0;
        this.slideIndex = 0;
        this.slides = [];
    }

    updateSlides(movies) {
        this.slides = movies;
        this.slideCount = this.slides.length;
        this.slideIndex = 0;
    }

    previousSlideIndex() {
        this.slideIndex = ( this.slideIndex - 1 + this.slideCount) % this.slideCount;
    }

    nextSlideIndex() {
        this.slideIndex = (this.slideIndex + 1) % this.slideCount;
    }
}