export class Select {
    static create(name, options, selector, className, data, key) {
        return new Select(name, options, selector, className, data, key).render();
    }

    constructor(name, options, selector, className, data, key) {
        this.name = name;
        this.options = options || [];
        this.selector = `.${selector.split(' ')[0]}`;
        this.className = className;
        this.data = data;
        this.key = key;
        this.title = document.createElement('h3');
        this.title.textContent = name;
    }

    createSelectElement() {
        this.select = document.createElement('select');
        this.select.name = this.name;
        if (this.className) {
            this.select.className = this.className;
        }
        if (this.data) {
            this.select.dataset.id = this.data;
        }
        this.container.appendChild(this.select);
        
        const defaultOption = document.createElement('option');
        defaultOption.textContent = 'Не выбрано';
        defaultOption.value = '0';
        this.select.appendChild(defaultOption);
    }

    createContainer() {
        this.container = document.createElement('div');
        document.querySelector(this.selector).appendChild(this.container);
        this.container.appendChild(this.title);
    }

    createOptions() {
        this.options.forEach((option) => {
            const {id, [this.key]: text} = option;
            if (!text) return
            const optionElem = document.createElement('option');
            optionElem.textContent = text;
            optionElem.value = id;
            this.select.appendChild(optionElem);
        })
    }

    render() {
        this.createContainer()
        this.createSelectElement()
        this.createOptions();
        return this.select;
    }
}