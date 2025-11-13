import {BaseView} from "../Base/BaseView.js";
import {Select} from "../../UI/Base/Select/Select.js";
import {InputRange} from "../../UI/Base/InputRange/InputRange.js";
import {Button} from "../../UI/Base/Button/Button.js";
import {Container} from "../../UI/Base/Container/Container.js";

export class FilterView extends BaseView {
    constructor(options) {
        super(options);
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

        return `${this.config.MOVIE_DATA}?${params.join('&')}`;
    }

    async getFilters() {
        this.filters = await this.controller.getFilters();
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

    mount(root, parentClassName, listener) {
        this.filtersContainer = Container.create({
            tag: 'div',
            root: root,
            className: [this.className,`${parentClassName}__filters`]
        });
        Button.create({
            text: 'Отправить',
            root: this.filtersContainer,
            listener: () => listener(this.getParams()),
            className: ['button']
        })
        this.getFilters()
    }
}