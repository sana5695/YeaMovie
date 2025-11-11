export class BaseModel {
    constructor(options) {
        const {movieService, observer, config} = options;
        this.movieService = movieService;
        this.observer = observer;
        this.config = config;
    }

    async loadFilms(url) {
        const defaultUrl = this.config.POPULAR_MOVIES.url;
        const filmsUrl = url || defaultUrl;
        
        try {
            const rawMovies = await this.movieService.getMovies(filmsUrl);
            if (rawMovies && rawMovies.items) {
                const movies = this.formatMovies(rawMovies.items);
                this.observer.setState(movies);
            }
        } catch (error) {
            console.error('Ошибка при загрузке фильмов:', error);
        }
    }

    async getMovie(id) {
        if (!id) {
            console.error('ID фильма не указан');
            return [];
        }
        
        try {
            const rawMovie = await this.movieService.getMovieData(id);
            if (rawMovie) {
                return this.formatMovies([rawMovie]);
            }
            return [];
        } catch (error) {
            console.error('Ошибка при загрузке данных фильма:', error);
            return [];
        }
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
}

