import {BaseButtonView} from "./BaseButtonView.js";

export class NavButtonView extends BaseButtonView {

    render(location) {
        const button = this.mount()
        const locationElement = document.querySelector(`.${location}`);
        locationElement.appendChild(button);
        return button;
    }

}