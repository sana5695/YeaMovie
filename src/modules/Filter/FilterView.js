import {Select} from "../../UI/Base/Select/Select.js";
import {InputRange} from "../../UI/Base/InputRange/InputRange.js";
import {Button} from "../../UI/Base/Button/Button.js";
import {Container} from "../../UI/Base/Container/Container.js";
import config from "../../core/config.js";
import fetchService from "../../core/FetchService.js";
import observer from "../../core/Observer.js";


export class FilterView {
    constructor({className}) {
        this.className = className;
    }

    getParams() {
        const params = [];
        if (this.countries.value !== '0') params.push(`countries=${this.countries.value}`);
        if (this.genres.value !== '0') params.push(`genres=${this.genres.value}`);

        const [ratingFrom, ratingTo] = this.rating;
        const [yearFrom, yearTo] = this.year;

        params.push(
            `ratingFrom=${ratingFrom.value}`,
            `ratingTo=${ratingTo.value}`,
            `yearFrom=${yearFrom.value}`,
            `yearTo=${yearTo.value}`
        );

        console.log(this.observerKey);

        observer.notify(this.observerKey, {url:`${config.MOVIE_DATA}?${params.join('&')}`})
    }

    async getFilters() {
        this.filters = await fetchService.getFilters();
        this.createFilters()
    }

    createFilters() {
        this.countriesData = this.filters.countries || [];
        this.genresData = this.filters.genres || [];

        this.genres = Select.create({
            text: 'Жанр',
            optionsSelect: this.genresData,
            root: this.filtersContainer
        });

        this.countries = Select.create({
            text: 'Страна',
            optionsSelect: this.countriesData,
            root: this.filtersContainer
        });

        this.year = InputRange.create(
            'Год',
            1920,
            2025,
            this.filtersContainer);

        this.rating = InputRange.create(
            'Рейтинг',
            0,
            10,
            this.filtersContainer);
    }

    mount(root, observerKey) {
        this.filtersContainer = Container.create({
            tag: 'div',
            root: root,
            className: [this.className]
        });
        Button.create({
            text: 'Отправить',
            root: this.filtersContainer,
            listener: this.getParams.bind(this),
            className: ['button']
        })
        this.observerKey = observerKey;
        this.getFilters()
    }
}