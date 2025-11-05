import {Config} from "./config.js";

export class MovieService {
    constructor() {
        this.config = new Config;
    }
    async fetchData(url) {
        try {
            const resp = await fetch(url, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-KEY': this.config.API_KEY,
                },
            });

            this.checkFetch(resp)

            return await resp.json();

        } catch (error) {
            console.error('Ошибка при выполнении запроса:', error);
            throw error;
        }
    }

    checkFetch(resp) {
        if (!resp.ok) throw new Error(`Ошибка запроса! Статус ошибки: ${resp.status}. Обновите страницу.`);
    }

    async getMovies(url) {
        return await this.fetchData(url);
    }

    async searchMovies(keydown) {
        return await this.fetchData(`${this.config.API_URL_SEARCH}${keydown}`)
    }

    async getMovieData(id) {
        return await this.fetchData(`${this.config.API_URL_MOVIE_DATA}${id}`)
    }

    async getMovieScreenshots(id) {
        return await this.fetchData(`${this.config.API_URL_MOVIE_DATA}${id}/images?type=SCREENSHOT&page=1`)
    }
}