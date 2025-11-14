class Config {

    constructor() {
        if (Config.instance) {
            return Config.instance;
        }
        Config.instance = this;
    }

    //API_KEY = 'fb847758-fd50-461c-bd70-59995317b3f7'
    API_KEY = 'd6eecabd-8d16-47f7-a591-fc375962fe39'
    //API_KEY = 'e084cce5-8340-4757-81df-cbe9fcb256af'
    BASE_URL = 'https://kinopoiskapiunofficial.tech/api';

    TOP_250_MOVIES = {
        name: 'Топ 250 фильмов',
        url :`${this.BASE_URL}/v2.2/films/collections?type=TOP_250_MOVIES&page=1`
    }
    POPULAR_MOVIES = {
        name: 'Популярные фильмы',
        url :`${this.BASE_URL}/v2.2/films/collections?type=TOP_POPULAR_MOVIES&page=1`
    }

    POPULAR_SERIES = {
        name: 'Популярные сериалы',
        url :`${this.BASE_URL}/v2.2/films/collections?type=POPULAR_SERIES&page=1`
    }

    ZOMBIE_THEME = {
        name: 'Фильмы про зомби',
        url: `${this.BASE_URL}/v2.2/films/collections?type=ZOMBIE_THEME&page=1`
    }
    CATASTROPHE_THEME = {
        name: 'Фильмы про катастрофы',
        url: `${this.BASE_URL}/v2.2/films/collections?type=CATASTROPHE_THEME&page=1`
    }

    KIDS_ANIMATION_THEME = {
        name: 'Детские мультфильмы',
        url: `${this.BASE_URL}/v2.2/films/collections?type=KIDS_ANIMATION_THEME&page=1`
    }

    COMICS_THEME = {
        name: 'Фильмы по комиксам',
        url: `${this.BASE_URL}/v2.2/films/collections?type=COMICS_THEME&page=1`
    }

    URL_SEARCH = `${this.BASE_URL}/v2.1/films/search-by-keyword?keyword=`
    MOVIE_DATA = `${this.BASE_URL}/v2.2/films`;

    TYPE_CARD = {
        small: 'small',
        large: 'big',
        screenshots: 'screenshots',
    }
}

const config = new Config();
export default config;
