import {LargeCardView} from "../UI/Card/LargeCardView.js";
import {SmallCardView} from "../UI/Card/SmallCardView.js";

export class CardFactory {
    static createCard(movie, size = 'small') {
        if (size === "big") return new LargeCardView(movie, size);
        if (size === "small") return new SmallCardView(movie, size);
    }
}
