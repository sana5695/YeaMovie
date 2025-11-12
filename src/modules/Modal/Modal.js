import {CardFactory} from "../../core/CardFactory.js";
import {MovieService} from "../../core/MovieService.js";
import {Config} from "../../core/config.js";

export class Modal {
    constructor(screenshots) {
        this.modal = document.createElement('div');
        this.modal.classList.add('modal');
        this.modalContent = document.createElement('div');
        this.modalContent.classList.add('modal-content');
        this.modal.appendChild(this.modalContent);
        document.body.appendChild(this.modal);
        this.screenshots = screenshots;
        this.bindListeners();
        this.movieService = new MovieService(new Config())
    }

    async openModal(movie, screenshots) {
        if (!movie) {
            return;
        }

        CardFactory.createCard(movie, 'big', this.modal).render()
        this.screenshots.mount(this.modal, 'modal')
        this.screenshots.controller.setMovies(await this.getMovieScreenshots(movie.id));


        const screenshotsContainer = this.modalContent.querySelector('.screenshots');
        if (screenshotsContainer && screenshots && Array.isArray(screenshots)) {
            screenshots.forEach((screenshot) => {
                if (screenshot) {
                    const img = document.createElement('img');
                    img.src = screenshot;
                    img.alt = title;
                    screenshotsContainer.appendChild(img);
                }
            });
        }
        this.modal.style.display = "block";
    }

    async getMovieScreenshots(id) {
        const rawMovie = await this.movieService.getMovieScreenshots(id)
        return (rawMovie.items.map(movie => movie.previewUrl))
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
        this.modal.innerHTML = '';
        this.modal.style.display = "none";
    }
}