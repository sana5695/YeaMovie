export class ListModel {
    constructor(movieService, observer) {
        this.movieService = movieService;
        this.observer = observer;
    }

    async films(url){
        url = !url ? 'POPULAR_SERIES' : url   // добавть нормальное дефолтное значение переделать в стратегию
        const rawMovies = await this.movieService.getMovies(this.movieService.config[url])
        const movies = this.formatMovies(rawMovies.items)
        this.observer.setState(movies)
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

    expand(list, text) {
        list.classList.toggle('hidden');
        return text === 'Развернуть' ? 'Свернуть' : 'Развернуть';
    }
}

