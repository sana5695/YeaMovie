import {BaseCardView} from "./BaseCardView.js";
import {Text} from "../../UI/Text/Text.js";

export class LargeCardView extends BaseCardView {
    renderContent() {
        super.renderContent();
        const description = this.movie.description || '';
        Text.create('p', description, this.movieInfoToptitle, ['movie__info_description'])
    }
}