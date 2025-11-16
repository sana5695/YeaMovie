import {Select} from "../../UI/Base/Select/Select.js";
import {InputRange} from "../../UI/Base/InputRange/InputRange.js";
import {Button} from "../../UI/Base/Button/Button.js";
import {Container} from "../../UI/Base/Container/Container.js";


export class FilterView {
    constructor({className}) {
        this.className = className;
    }

    createFilters(filtersData) {
        this.genres = Select.create({
            text: 'Жанр',
            optionsSelect: filtersData.genres || [],
            root: this.selectsContainer
        });

        this.countries = Select.create({
            text: 'Страна',
            optionsSelect: filtersData.countries || [],
            root: this.selectsContainer
        });

        this.year = InputRange.create('Год', 1920, 2025, this.inputsContainer);
        this.rating = InputRange.create('Рейтинг', 0, 10, this.inputsContainer);
    }

    getSelectedFilters() {
        return {
            country: this.countries.value,
            genre: this.genres.value,
            yearFrom: this.year[0].value,
            yearTo: this.year[1].value,
            ratingFrom: this.rating[0].value,
            ratingTo: this.rating[1].value
        };
    }

    mount(root) {
        this.filtersContainer = Container.create({
            tag: 'div',
            root: root,
            className: [this.className]
        });

        this.selectsContainer = Container.create({
            tag: 'div',
            root: this.filtersContainer,
            className: ['selects-container'],
        })

        this.inputsContainer = Container.create({
            tag: 'div',
            root:this.filtersContainer,
            className: ['inputs-container'],
        })

        Button.create({
            text: 'Отправить',
            root: this.filtersContainer,
            listener: () => this.onApplyFilters(this.getSelectedFilters()),
            className: ['button']
        });
    }
}