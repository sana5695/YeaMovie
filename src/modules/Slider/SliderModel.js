import {BaseModel} from "../Base/BaseModel.js";

export class SliderModel extends BaseModel {
    constructor(options) {
        super(options);
        this.slideCount = 0;
        this.observer.subscribe(() => this.updateSlideCount());
    }

    updateSlideCount() {
        this.slideCount = this.observer.getState().length;
    }

    previousSlideIndex = (index) => {
        return (index - 1 + this.slideCount) % this.slideCount;
    }

    nextSlideIndex = (index) => {
        return (index + 1) % this.slideCount;
    }
}

