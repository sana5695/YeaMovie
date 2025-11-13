import observer from "../../core/Observer.js";

export class SliderModel {
    constructor(observerid) {
        this.observerid = observerid;
        this.slideCount = 0;
        this.observerKey = `SLIDES_CREATE${this.observerid}`
        observer.subscribe(this.observerKey,this.updateSlideCount.bind(this));
    }

    updateSlideCount(movies) {
        this.slideCount = movies.length;
    }

    previousSlideIndex(index) {
        return (index - 1 + this.slideCount) % this.slideCount;
    }

    nextSlideIndex(index) {
        return (index + 1) % this.slideCount;
    }
}