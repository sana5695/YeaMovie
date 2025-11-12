import {BaseController} from "../Base/BaseController.js";


export class SliderController extends BaseController {
    handlePreviousSlide(index) {
        return this.model.previousSlideIndex(index);
    }

    handleNextSlide(index) {
        return this.model.nextSlideIndex(index);
    }
}