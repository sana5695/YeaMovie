export class MoviesController {
    constructor(movieService,fetchStrategy, bigListView, smallListView, obs) {
        this.fetchStrategy = fetchStrategy;
        this.bigListView = bigListView;
        this.smallListView = smallListView;
        this.observer = obs;
    }

    async init() {
        this.observer.subscribe(movies => this.smallListView.render(movies));
        await this.filterMovies("TOP_POPULAR_MOVIES");
        await this.loadMovies()
    }

    async loadMovies() {
        for (const el of document.querySelectorAll("[data-collections]")) {
            const type = el.dataset;
            const strategyFn = this.fetchStrategy.getStrategy(type.collections);
            const rawMovies = await strategyFn();
            const movies = this.formatMovies(rawMovies.items)
            this.bigListView.setContainer(el);
            this.bigListView.render(movies)


// Получаем элементы слайдера
            const slider = document.querySelector('.movie-slider__item');
            const prevButton = document.querySelector('.prev-button');
            const nextButton = document.querySelector('.next-button');
            const slides = Array.from(slider.querySelectorAll('.big'));
            const slideCount = slides.length;
            let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
            prevButton.addEventListener('click', showPreviousSlide);
            nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
            function showPreviousSlide() {
                slideIndex = (slideIndex - 1 + slideCount) % slideCount;
                updateSlider();
            }

// Функция для показа следующего слайда
            function showNextSlide() {
                slideIndex = (slideIndex + 1) % slideCount;
                updateSlider();
            }

// Функция для обновления отображения слайдера
            function updateSlider() {
                slides.forEach((slide, index) => {
                    if (index === slideIndex) {
                        slide.style.display = 'flex';
                    } else {
                        slide.style.display = 'none';
                    }
                });
            }

            console.log(slideCount)

// Инициализация слайдера
            updateSlider();

        }
    }



    async filterMovies(type) {
        const strategyFn = this.fetchStrategy.getStrategy(type);


        const rawMovies = await strategyFn();
        const movies = this.formatMovies(rawMovies.items)

        this.observer.setState(movies);
        console.log(movies);
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



}
