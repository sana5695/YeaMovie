import {Button} from "../../UI/Base/Button/Button.js";
import {Input} from "../../UI/Base/Input/Input.js";
import {Container} from "../../UI/Base/Container/Container.js";

export class SearchView {
    constructor({className}) {
        this.className = className;
    }

    bindListeners() {
        this.input.addEventListener('keypress', this.onInput);
    }

    onInput = (e) => {
        const key = e.which || e.keyCode;
        if (key === 13) this.onSearch(this.input.value)
    }

    showBackButton() {
        this.backButton.style.display = 'block';
    }

    hideBackButton() {
        this.backButton.style.display = 'none';
    }

    renderSearch(root) {
        this.searchContainer = Container.create({
            tag: 'div',
            root: root,
            className: [`search`]
        });

        this.input = Input.create({
            text: 'Поиск',
            root: this.searchContainer,
            className: ['search--input'],
            data: 'search--input'
        });

        Button.create({
            text: 'Поиск',
            root: this.searchContainer,
            listener: () => this.onSearch(this.input.value),
            className: ['button']
        })

        this.backButton = Button.create({
            text: 'Назад',
            root: this.searchContainer,
            listener: this.onBack,
            className: ['button']
        })
        this.backButton.style.display = 'none';
    }

    mount() {
        this.container = Container.create({
            tag: 'div',
            root: document.querySelector('header'),
            className: [`search__container`],
        });

        this.renderSearch(this.container);
        this.bindListeners();
    }
}