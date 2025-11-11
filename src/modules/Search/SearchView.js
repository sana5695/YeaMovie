import {BaseView} from "../Base/BaseView.js";
import {Button} from "../../UI/Button/Button.js";
import {Input} from "../../UI/Input/Input.js";

export class SearchView extends BaseView {
    constructor(controller, observer, section ,root, data, modal, config) {
        super(controller, observer, section ,root, data, modal, config);
    }

    bindListeners() {
        super.bindListeners();
        this.sendButton.addEventListener('click', this.onSearch);
        this.backButton.addEventListener('click', this.onBack);
        this.input.addEventListener('keypress', this.onInput);
    }

    onSearch = () => {
        this.controller.handleSearch(this.input.value);
        this.backButton.style.display = 'block';
        document.querySelector('main').innerHTML = ''
        document.querySelector('main').appendChild(this.container);
    }

    onInput = (e) => {
        const key = e.which || e.keyCode;
        if (key === 13) this.onSearch()
    }

    onBack = () => {
        document.location.reload()
    }

    mount() {
        super.mount()
        this.input = Input.create('Поиск', this.section)
        this.sendButton = Button.create('Поиск', this.root)
        this.backButton = Button.create('Назад', this.root)
        this.backButton.style.display = 'none';

        this.bindListeners()
    }
}