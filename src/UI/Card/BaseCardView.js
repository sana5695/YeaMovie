import {Container} from "../Base/Container/Container.js";
import {Img} from "../Base/Img/Img.js";
import {Text} from "../Base/Text/Text.js";

export class BaseCardView {
    constructor(movie, type, container) {
        this.movie = movie;
        this.type = type
        this.root = container
    }

    render() {
        this.cardContainer = Container.create({tag:'article', root:this.root, className:['card', this.type], data:this.movie.id});
        this.renderContent()
        return this.cardContainer
    }

    renderContent() {
        if (!this.movie) {
            return '';
        }

        const poster = this.movie.poster || '';
        const title = this.movie.title || 'Без названия';
        const year = this.movie.year?.toString() || '';
        const genres = this.movie.genres || '';

        this.cardTop = Container.create({
            tag: 'div',
            root: this.cardContainer,
            className: ['card__top']
        })
        this.cardImage = Container.create({
            tag: 'div',
            root: this.cardTop,
            className: ['card__image']
        })
        Img.create({
            src: poster,
            root: this.cardImage,
            alt: title,
            className: ['movie__cover-inner_img']
        })

        this.movieInfo = Container.create({
            tag: 'div',
            root: this.cardContainer,
            className: ['movie__info']
        })
        this.movieInfoToptitle = Container.create({
            tag: 'div',
            root: this.movieInfo,
            className: ['movie__info']
        })
        Text.create({
            tag: 'h2',
            text: title,
            root: this.movieInfoToptitle,
            className: ['movie__info_title']
        })

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
