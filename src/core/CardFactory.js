import {LargeCardView} from "../UI/Card/LargeCardView.js";
import {SmallCardView} from "../UI/Card/SmallCardView.js";
import {ScreenshotsCardView} from "../UI/Card/ScreenshotsCardView.js";
import {ModalCardView} from "../UI/Card/ModalCardView.js";

export class CardFactory {
    static createCard(movie, type = 'small', container) {
        if (type === "big") return new LargeCardView(movie, type, container);
        if (type === "small") return new SmallCardView(movie, type, container);
        if (type === "screenshot") return new ScreenshotsCardView(movie, type, container);
        if (type === "modal__movie") return new ModalCardView(movie, type, container);
    }
}
