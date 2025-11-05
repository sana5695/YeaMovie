export class Config {
    API_KEY = 'd6eecabd-8d16-47f7-a591-fc375962fe39'
    BASE_URL = 'https://kinopoiskapiunofficial.tech/api';

    PREMIER = `${this.BASE_URL}/v2.2/films/premieres?year=2025&month=OCTOBER `
    POPULAR_MOVIES = `${this.BASE_URL}/v2.2/films/collections?type=TOP_POPULAR_MOVIES&page=1`
    POPULAR_SERIES = `${this.BASE_URL}/v2.2/films/collections?type=POPULAR_SERIES&page=1`
    API_URL_SEARCH = `${this.BASE_URL}/v2.1/films/search-by-keyword?keyword=`
    API_URL_MOVIE_DATA = `${this.BASE_URL}/v2.1/films/`;
    ZOMBIE_THEME = `${this.BASE_URL}/v2.2/films/collections?type=ZOMBIE_THEME&page=1`
    CATASTROPHE_THEME = `${this.BASE_URL}/v2.2/films/collections?type=CATASTROPHE_THEME&page=1`
    KIDS_ANIMATION_THEME = `${this.BASE_URL}/v2.2/films/collections?type=KIDS_ANIMATION_THEME&page=1`
    COMICS_THEME = `${this.BASE_URL}/v2.2/films/collections?type=COMICS_THEME&page=1`
}