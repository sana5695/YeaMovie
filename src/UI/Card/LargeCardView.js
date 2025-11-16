import {BaseCardView} from "./BaseCardView.js";
import {Text} from "../Base/Text/Text.js";
import {Container} from "../Base/Container/Container.js";

export class LargeCardView extends BaseCardView {
    renderContent() {
        super.renderContent();
        const description = this.movie.description || '';
        const year = this.movie.year?.toString() || '';
        const genres = this.movie.genres || '';
        Text.create({
            tag:'p',
            text:description,
            root:this.movieInfoToptitle,
            className:['movie__info_description']})

        this.movieInfoSubtitle = Container.create({
            tag: 'div',
            root: this.movieInfo,
            className: ['movie__info__subtitle']
        })
        Text.create({
            tag: 'p',
            text: year,
            root: this.movieInfoSubtitle,
            className: ['movie__info_year']
        })
        Text.create({
            tag: 'p',
            text: genres,
            root: this.movieInfoSubtitle,
            className: ['movie__info_category']
        })
    }

}