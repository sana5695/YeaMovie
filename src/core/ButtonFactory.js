import {NavButtonView} from "../modules/Button/NavButtonView.js";

export class ButtonFactory {
    static createButton(text, location = 'nav', data) {
        if (location === "nav") return new NavButtonView(data, text).mount();
    }
}
