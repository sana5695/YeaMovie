import movieService from "./MovieService.js";

export class FetchService {
    constructor() {
        if (FetchService.instance) {
            return FetchService.instance;
        }
        this.movieService = movieService;
        FetchService.instance = this;
    }


    async loadFilms(url) {
        const rawMovies = await this.movieService.getMovies(url);
        return this.formatMovies(rawMovies.items || rawMovies.films);
    }

    async getMovieScreenshots(id) {
        const rawMovie = await this.movieService.getMovieScreenshots(id)
        return rawMovie.items.map(movie => movie.previewUrl)
    }

    async search(text) {
        const rawMovies = await this.movieService.searchMovies(text)
        return this.formatMovies(rawMovies.films)
    }

    async getFilters() {
        return await this.movieService.getFilters()
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

const fetchService = new FetchService();
export default fetchService;
