import {NavButtonView} from "../modules/Button/NavButtonView.js";
import {BaseButtonView} from "../modules/Button/BaseButtonView.js";

export class ButtonFactory {
    static createButton(text, location = '', data) {
        if (location === "") return new BaseButtonView(data, text).mount();
        if (location === "slider__nav" || "list__nav") return new NavButtonView(data, text).render(location);
    }
}
