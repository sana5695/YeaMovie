import {BaseCardView} from "./BaseCardView.js";

export class SmallCardView extends BaseCardView {
    renderContent() {
        const poster = this.movie.poster || '';
        const title = this.movie.title || 'Без названия';
        const year = this.movie.year?.toString() || '';
        const genres = this.movie.genres || '';
        
        return `
            <div class="card__top">
                <div class="card__image">
                    <img
                        loading="lazy"
                        class="movie__cover-inner_img"
                        src="${poster}"
                        alt="${title}"
                    />
                </div>
            </div>
            <div class="movie__info">
                <h2 class="movie__info_title">${title}</h2>
                <div class="movie__info__subtitle">
                    <p class="movie__info_year">${year}</p>
                    <p class="movie__info_category">${genres}</p>
                </div>
            </div>
        `;
    }
}