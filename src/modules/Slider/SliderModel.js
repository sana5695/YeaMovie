import {BaseModel} from "../Base/BaseModel.js";

export class SliderModel extends BaseModel {
    constructor(movieService, observer, config) {
        super(movieService, observer, config);
        this.slideCount = 0;
        this.observer.subscribe(() => this.updateSlideCount());
    }

    updateSlideCount() {
        this.slideCount = this.observer.getState().length;
    }

    showPreviousSlide = (index) => {
        return (index - 1 + this.slideCount) % this.slideCount;
    }

    showNextSlide = (index) => {
        return (index + 1) % this.slideCount;
    }
}

