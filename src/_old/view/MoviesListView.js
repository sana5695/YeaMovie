import {CardFactory} from "../core/CardFactory.js";

export class MoviesListView {
    constructor(containerSelector, size) {
        this.container = document.querySelector(containerSelector);
        this.size = size;
    }

    render(movies) {
        const movieCardsHtml = movies.map(movie => {
            return CardFactory.createCard(movie, this.size).render();
        });

        this.container.innerHTML = movieCardsHtml.join('');
    }

    setContainer(container) {
        this.container = container;
    }
}
