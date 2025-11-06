import {BaseController} from "../Base/BaseController.js";

export class SliderController extends BaseController {
    constructor(model) {
        super(model);
    }

    handlePreviousSlide = (index) => {
        return this.model.showPreviousSlide(index)
    }

    handleNextSlide = (index) => {
        return this.model.showNextSlide(index)
    }
}