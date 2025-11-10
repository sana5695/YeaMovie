export class MovieService {
    constructor(config) {
        this.config = config;



    }

    async fetchData(url) {
        if (!url) {
            throw new Error('URL не указан');
        }
        
        try {
            const response = await fetch(url, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-KEY': this.config.API_KEY,
                },
            });

            this.checkResponse(response);
            return await response.json();
        } catch (error) {
            console.error('Ошибка при выполнении запроса:', error);
            throw error;
        }
    }

    checkResponse(response) {
        if (!response.ok) {
            throw new Error(`Ошибка запроса! Статус ошибки: ${response.status}. Обновите страницу.`);
        }
    }

    async getMovies(url) {
        return await this.fetchData(url);
    }

    async getFilters() {
        return await this.fetchData(`${this.config.MOVIE_DATA}/filters`);
    }

    async searchMovies(keyword) {
        return await this.fetchData(`${this.config.URL_SEARCH}${encodeURIComponent(keyword)}`);
    }

    async getMovieData(id) {
        return await this.fetchData(`${this.config.MOVIE_DATA}/${id}`);
    }

    async getMovieScreenshots(id) {
        return await this.fetchData(`${this.config.MOVIE_DATA}/${id}/images?type=STILL&page=1`);
    }
}