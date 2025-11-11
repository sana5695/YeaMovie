import {BaseView} from "../Base/BaseView.js";
import {Select} from "../../UI/Select/Select.js";
import {InputRange} from "../../UI/InputRange/InputRange.js";
import {Button} from "../../UI/Button/Button.js";
import {Container} from "../../UI/Container/Container.js";

export class FilterView extends BaseView {
    constructor(controller, observer, section ,root, data, modal, config) {
        super(controller, observer, section ,root, data, modal, config);
    }

    bindListeners() {
        super.bindListeners();
        this.sendButton.addEventListener('click', () => this.onLoadMovies(this.config.MOVIE_DATA + this.getParams()))
    }

    getParams(){
        const params = [];

        if (this.countries.value !== '0') {
            params.push(`countries=${this.countries.value}`);
        }

        if (this.genres.value !== '0') {
            params.push(`genres=${this.genres.value}`);
        }

        const [ratingFrom, ratingTo] = this.rating;
        const [yearFrom, yearTo] = this.year;

        params.push(
            `ratingFrom=${ratingFrom.value}`,
            `ratingTo=${ratingTo.value}`,
            `yearFrom=${yearFrom.value}`,
            `yearTo=${yearTo.value}`
        );

        return `?${params.join('&')}`;
    }

    async getFilters(){
        this.filters = await this.controller.getFilters();
        this.createFilters()
    }

    createFilters(){
        this.countriesData = this.filters.countries || [];
        this.genresData = this.filters.genres || [];

        this.filtersContainer = Container.create('div',this.section)
        this.genres = Select.create('Жанр', this.genresData, this.filtersContainer);
        this.countries = Select.create('Страна', this.countriesData, this.filtersContainer);
        this.year = InputRange.create('Год', 1920, 2025, this.filtersContainer);
        this.rating = InputRange.create('Рейтинг', 0, 10, this.filtersContainer);
    }

    mount() {
        super.mount()
        this.sendButton = Button.create('Отправить', this.section);
        this.getFilters()
        this.bindListeners();
    }
}