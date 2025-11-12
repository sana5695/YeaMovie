import {BaseUi} from "../BaseUi.js";

export class Select extends BaseUi {
    static create(options) {
        return new Select(options).render();
    }

    constructor(options) {
        super(options);
    }

    createElem() {
        this.elem = document.createElement('select');
    }

    createContainer() {
        this.container = document.createElement('div');
        this.root.appendChild(this.container);

        this.title = document.createElement('h3');
        this.title.textContent = this.text;
        this.container.appendChild(this.title);
    }

    createOptions(){
        if (this.className) this.select.classList.add(...this.className)
        if (this.data) this.select.dataset.id = this.data;

        this.container.appendChild(this.elem);

        const defaultOption = document.createElement('option');
        defaultOption.textContent = 'Не выбрано';
        defaultOption.value = '0';
        this.elem.appendChild(defaultOption);
    }

    createSelectOptions() {
        const [id, text] = Object.keys(this.optionsSelect[0]);
        this.optionsSelect.forEach((option) => {
            if (!option[text]) return
            const optionElem = document.createElement('option');
            optionElem.textContent = option[text];
            optionElem.value = option[id];
            this.elem.appendChild(optionElem);
        })
    }

    render() {
        this.createContainer()
        this.createElem()
        this.createOptions()
        this.createSelectOptions();
        return this.select;
    }
}