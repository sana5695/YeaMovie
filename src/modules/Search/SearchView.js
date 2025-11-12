import {BaseView} from "../Base/BaseView.js";
import {Button} from "../../UI/Base/Button/Button.js";
import {Input} from "../../UI/Base/Input/Input.js";
import {Container} from "../../UI/Base/Container/Container.js";
import {Link} from "../../UI/Base/Link/Link.js";

export class SearchView extends BaseView {
    constructor(options) {
        super(options);
    }

    bindListeners() {
        super.bindListeners();
        this.input.addEventListener('keypress', this.onInput);
    }

    onSearch = () => {
        this.controller.handleSearch(this.input.value);
        this.backButton.style.display = 'block';
    }

    onInput = (e) => {
        const key = e.which || e.keyCode;
        if (key === 13) this.onSearch()
    }

    onBack = () => {
        document.location.reload()
    }

    renderSearch() {
        this.searchContainer = Container.create({
            tag: 'div',
            root: this.root,
            className: [`search`]
        });

        Link.create({
            text: '🎬 YeaMovie',
            href: "index.html",
            root: this.searchContainer,
            className: ['logo']
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
            listener: this.onSearch,
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
        this.renderSearch()
        super.mount()
        this.bindListeners()
    }
}