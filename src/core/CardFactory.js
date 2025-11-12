import {LargeCardView} from "../modules/Card/LargeCardView.js";
import {SmallCardView} from "../modules/Card/SmallCardView.js";
import {ScreenshotsCardView} from "../modules/Card/ScreenshotsCardView.js";

export class CardFactory {
    static createCard(movie, size = 'small', container) {
        if (size === "big") return new LargeCardView(movie, size, container);
        if (size === "small") return new SmallCardView(movie, size, container);
        if (size === "screenshot") return new ScreenshotsCardView(movie, size, container);
    }
}
