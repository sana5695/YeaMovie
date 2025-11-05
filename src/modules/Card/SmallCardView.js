import {BaseCardView} from "./BaseCardView.js";

export class SmallCardView extends BaseCardView {
    renderContent() {
        return `
        <div class="card__top">
            <a href="#" class="card__image">
                <img
                    loading="lazy"
                    class="movie__cover-inner_img"
                    src="${this.movie.poster}"
                    alt="${this.movie.title}"
                />
            </a>
        </div>
        <div class="movie__info">
          <h2 class="movie__info_title">${this.movie.title}</h2>
          <div class="movie__info__subtitle">
            <p class="movie__info_year">${this.movie.year}</p>
            <p class="movie__info_category">${this.movie.genres}</p>
          </div>
          
        </div>
        `;
    }
}