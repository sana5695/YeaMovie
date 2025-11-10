import {BaseCardView} from "./BaseCardView.js";

export class LargeCardView extends BaseCardView {
    renderContent() {
        if (!this.movie) {
            return '';
        }
        
        const coverUrl = this.movie.coverUrl || '';
        const title = this.movie.title || 'Без названия';
        const description = this.movie.description || '';
        const year = this.movie.year?.toString() || '';
        const genres = this.movie.genres || '';
        
        return `
            <div class="card__top">
                <div class="card__image">
                    <img
                        loading="lazy"
                        class="movie__cover-inner_img"
                        src="${coverUrl}"
                        alt="${title}"
                    />
                </div>
            </div>
            <div class="movie__info">
                <h2 class="movie__info_title">${title}</h2>
                <p class="movie__info_description">${description}</p>
                <div class="movie__info__subtitle">
                    <p class="movie__info_year">${year}</p>
                    <p class="movie__info_category">${genres}</p>
                </div>
            </div>
        `;
    }
}