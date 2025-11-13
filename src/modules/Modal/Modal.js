import {CardFactory} from "../../core/CardFactory.js";

export class Modal {
    constructor(screenshots, movieService) {
        this.modal = document.createElement('div');
        this.modal.classList.add('modal');
        this.modalContent = document.createElement('div');
        this.modalContent.classList.add('modal-content');
        this.modal.appendChild(this.modalContent);
        document.body.appendChild(this.modal);
        this.screenshots = screenshots;
        this.bindListeners();
        this.movieService = movieService
    }

    async openModal(movie) {
        if (!movie) {
            return;
        }

        CardFactory.createCard(movie, 'big', this.modalContent).render()
        const screenshots = await this.getMovieScreenshots(movie.id)
        if (screenshots.length !== 0){
            this.screenshots.mount(this.modalContent, 'modal')
            this.screenshots.controller.setMovies(screenshots);
        }

        this.modal.style.display = "block";
    }

    async getMovieScreenshots(id) {
        const rawMovie = await this.movieService.getMovieScreenshots(id)
        return rawMovie.items.map(movie => CardFactory.createCard(movie.previewUrl, 'screenshot').render())

    }

    formatMovies(rawMovies) {
        return rawMovies.map(movie => ({
            title: movie.nameRu,
            genres: movie.genres.map(item => item.genre).join(', '),
            rating: movie.ratingKinopoisk || movie.rating,
            poster: movie.posterUrlPreview,
            description: movie.description,
            coverUrl: movie.posterUrlPreview,
            year: movie.year,
            id: movie.kinopoiskId || movie.filmId,
        }));
    }

    bindListeners() {
        document.body.addEventListener('click', this.handleOverlayClick);
    }

    handleOverlayClick = (event) => {
        if (event.target === this.modal) {
            this.closeModal();
        }
    }

    closeModal() {
        this.modalContent.innerHTML = '';
        this.modal.style.display = "none";
    }
}