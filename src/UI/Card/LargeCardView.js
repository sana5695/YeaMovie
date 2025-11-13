import {BaseCardView} from "./BaseCardView.js";
import {Text} from "../Base/Text/Text.js";

export class LargeCardView extends BaseCardView {
    renderContent() {
        super.renderContent();
        const description = this.movie.description || '';
        Text.create({
            tag:'p',
            text:description,
            root:this.movieInfoToptitle,
            className:['movie__info_description']})
    }
}