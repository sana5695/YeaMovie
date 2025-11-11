export class Modal {
    constructor() {
        this.modal = document.createElement('div');
        this.modal.classList.add('modal');
        this.modalContent = document.createElement('div');
        this.modalContent.classList.add('modal-content');
        this.modal.appendChild(this.modalContent);

        document.body.appendChild(this.modal);
        this.bindListeners();
    }

    openModal(movie, screenshots) {
        if (!movie) {
            return;
        }

        const title = movie.title || 'Без названия';
        const description = movie.description || '';
        const year = movie.year?.toString() || '';
        const genres = movie.genres || '';
        const posterUrl = movie.poster || '';

        this.modalContent.innerHTML = `
            <div>
                <div class="card__top">
                    <div class="card__image">
                        <img
                            loading="lazy"
                            class="movie__cover-inner_img"
                            src="${posterUrl}"
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
            </div>
            ${screenshots && screenshots.length > 0 ? '<div class="screenshots"></div>' : ''}
        `;

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

    bindListeners() {
        document.body.addEventListener('click', this.handleOverlayClick);
    }

    handleOverlayClick = (event) => {
        if (event.target === this.modal) {
            this.closeModal();
        }
    }

    closeModal() {
        this.modal.style.display = "none";
    }
}