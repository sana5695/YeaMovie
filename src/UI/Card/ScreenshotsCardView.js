import {BaseCardView} from "./BaseCardView.js";
import {Img} from "../Base/Img/Img.js";

export class ScreenshotsCardView extends BaseCardView {
    renderContent() {
        const poster = this.movie;

        Img.create({
            src: poster,
            root: this.cardContainer,
            alt: '',
            className: ['screenshot']
        })
    }
}