import {LargeCardView} from "../UI/Card/LargeCardView.js";
import {SmallCardView} from "../UI/Card/SmallCardView.js";
import {ScreenshotsCardView} from "../UI/Card/ScreenshotsCardView.js";

export class CardFactory {
    static createCard(movie, size = 'small', container) {
        if (size === "big") return new LargeCardView(movie, size, container);
        if (size === "small") return new SmallCardView(movie, size, container);
        if (size === "screenshot") return new ScreenshotsCardView(movie, size, container);
    }
}
