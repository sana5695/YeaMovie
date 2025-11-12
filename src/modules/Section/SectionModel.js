export class SectionModel{
    constructor(options){
        const {observer, movieService} = options;
        this.observer = observer;
        this.movieService = movieService;
    }

    async loadFilms(url) {
       try {
            const rawMovies = await this.movieService.getMovies(url);
            console.log(rawMovies);
            if (rawMovies && (rawMovies.items || rawMovies.films)) {
                const movies = this.formatMovies(rawMovies.items || rawMovies.films);
                this.observer.setState(movies);
            }
        }
        catch (error) {
            console.error('Ошибка при загрузке фильмов:', error);
        }
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
                id: movie.kinopoiskId || movie.filmId, }
        ));
    }
}