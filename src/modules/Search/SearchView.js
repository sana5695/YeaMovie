import {BaseView} from "../Base/BaseView.js";
import {Button} from "../../UI/Base/Button/Button.js";
import {Input} from "../../UI/Base/Input/Input.js";
import {Container} from "../../UI/Base/Container/Container.js";

export class SearchView extends BaseView {
    constructor(options) {
        super(options);
    }

    bindListeners() {
        this.input.addEventListener('keypress', this.onInput);
    }

    onSearch = () => {
        this.backButton.style.display = 'block';
        return(this.config.URL_SEARCH + encodeURIComponent(this.input.value));
    }

    onInput = (e) => {
        const key = e.which || e.keyCode;
        if (key === 13) this.onSearch()
    }

    onBack = () => {
        this.backButton.style.display = 'none';
        return ''
    }

    renderSearch(root, listener) {
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
            listener: () => listener(this.onSearch()),
            className: ['button']
        })

        this.backButton = Button.create({
            text: 'Назад',
            root: this.searchContainer,
            listener: () => listener(this.onBack()),
            className: ['button']
        })
        this.backButton.style.display = 'none';

    }

    mount(root, parentClassName, listener) {
        this.container = Container.create({
            tag: 'div',
            root: document.querySelector('header'),
            className: [this.className,`${parentClassName}__container`],
        });
        this.renderSearch(this.container, listener);

        this.bindListeners()
    }
}