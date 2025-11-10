import {BaseView} from "../Base/BaseView.js";
import {Select} from "../../UI/Select/Select.js";
import {InputRange} from "../../UI/InputRange/InputRange.js";
import {Button} from "../../UI/Button/Button.js";

export class FilterView extends BaseView {
    constructor(controller, observer, root, data, modal) {
        super(controller, observer, root, data, modal);
        this.data = data[0]
    }

    bindListeners() {
        this.sendButton.addEventListener('click', this.onLoadMoviesClick);
        this.cardListener(this.container);
    }

    onLoadMoviesClick = () => {
        const baseUrl = this.data;
        const params = this.getParams();
        const url = baseUrl + params;
        this.controller.getMovies(url);
    }

    getParams(){
        let params='?'
        if (this.countries.value !== '0') params += `countries=${this.countries.value}&`;
        if (this.genres.value !== '0') params += `genres=${this.genres.value}&`;
        const [ratingFrom, ratingTo] = this.rating;
        params += `ratingFrom=${ratingFrom.value}&ratingTo=${ratingTo.value}&`
        const [yearFrom, yearTo] = this.year;
        params += `yearFrom=${yearFrom.value}&yearTo=${yearTo.value}`
        return params;
    }

    mount() {
        const mainElement = document.querySelector('main');
        if (mainElement) {
            mainElement.appendChild(this.root);
        }
        
        this.controller.getFilters()
            .then((data) => {
                if (data) {
                    this.countriesData = data.countries || [];
                    this.genresData = data.genres || [];
                    
                    this.genres = Select.create('Жанр', this.genresData, this.root.className, 'filter', 'filter', 'genre');
                    this.countries = Select.create('Страна', this.countriesData, this.root.className, 'filter', 'filter', 'country');
                    this.year = InputRange.create('Год', 1920, 2025, 1, this.root.className);
                    this.rating = InputRange.create('Рейтинг', 0, 10, 1, this.root.className);
                    this.sendButton = Button.create('Отправить', this.root.className);
                    
                    this.bindListeners();
                    this.root.appendChild(this.container);
                }
            })
            .catch((error) => {
                console.error('Ошибка при загрузке фильтров:', error);
            });
    }
}