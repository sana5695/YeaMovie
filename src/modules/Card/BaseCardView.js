import {Container} from "../../UI/Container/Container.js";
import {Img} from "../../UI/Img/Img.js";
import {Text} from "../../UI/Text/Text.js";

export class BaseCardView {
    constructor(movie, size, container) {
        this.movie = movie;
        this.size = size
        this.root = container
    }

    render(){
        this.cardContainer = Container.create('article', this.root, ['card', this.size], this.movie.id);
        this.renderContent()
    }

    renderContent() {
        if (!this.movie) {
            return '';
        }

        const poster = this.movie.poster || '';
        const title = this.movie.title || 'Без названия';
        const year = this.movie.year?.toString() || '';
        const genres = this.movie.genres || '';

        this.cardTop = Container.create('div', this.cardContainer, ['card__top'])
        this.cardImage = Container.create('div', this.cardTop, ['card__image'])
        Img.create(poster, this.cardImage, title, ['movie__cover-inner_img'])

        this.movieInfo = Container.create('div', this.cardContainer, ['movie__info'])
        this.movieInfoToptitle = Container.create('div', this.movieInfo, ['movie__info'])
        Text.create('h2', title, this.movieInfoToptitle, ['movie__info_title'])

        this.movieInfoSubtitle = Container.create('div', this.movieInfo, ['movie__info__subtitle'])
        Text.create('p', year, this.movieInfoSubtitle, ['movie__info_year'])
        Text.create('p', genres, this.movieInfoSubtitle, ['movie__info_category'])
    }
}
