import {BaseView} from "../Base/BaseView.js";
import {Button} from "../../UI/Button/Button.js";

export class SearchView extends BaseView {
    constructor(controller, observer, root, data, modal) {
        super(controller, observer, root, data, modal);
    }

    bindListeners() {
        this.sendButton.addEventListener('click', this.onSearch);
        this.backButton.addEventListener('click', this.onBack);
        this.input.addEventListener('keypress', this.onInput);
        this.cardListener(this.container)
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
        document.querySelector('header').appendChild(this.root)

        this.input = document.createElement("input");
        this.input.type = "text";
        this.input.setAttribute("placeholder", "Search");
        this.root.appendChild(this.input);


        this.sendButton = Button.create('Поиск', this.root.className)
        this.backButton = Button.create('Назад', this.root.className)
        this.backButton.style.display = 'none';

        this.bindListeners()
    }
}