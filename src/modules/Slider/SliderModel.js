import {BaseModel} from "../Base/BaseModel.js";

export class SliderModel extends BaseModel{
    constructor(movieService, observer) {
        super(movieService, observer);
        this.slideCount = 0
        this.observer.subscribe(() => this.getCount());
    }

    getCount() {
        this.slideCount = this.observer.getState().length;
    }

    showPreviousSlide = (index) => {
        return (index - 1 + this.slideCount) % this.slideCount;
    }

    showNextSlide = (index) => {
        return (index + 1) % this.slideCount;
    }

}

