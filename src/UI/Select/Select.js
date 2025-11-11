export class Select {
    static create(name, options, root, className, data) {
        return new Select(name, options, root, className, data).render();
    }

    constructor(name, options, root, className, data) {
        this.name = name;
        this.options = options || [];
        this.root = root;
        this.className = className;
        this.data = data;
    }

    createSelectElement() {
        this.select = document.createElement('select');
        this.select.name = this.name;
        if (this.className) this.select.className = this.className;
        if (this.data) this.select.dataset.id = this.data;

        this.container.appendChild(this.select);
        
        const defaultOption = document.createElement('option');
        defaultOption.textContent = 'Не выбрано';
        defaultOption.value = '0';
        this.select.appendChild(defaultOption);
    }

    createContainer() {
        this.container = document.createElement('div');
        this.root.appendChild(this.container);

        this.title = document.createElement('h3');
        this.title.textContent = name;
        this.container.appendChild(this.title);
    }

    createOptions() {
        this.options.forEach((option) => {
            const [id, text] = Object.keys(option);
            if (!text) return
            const optionElem = document.createElement('option');
            optionElem.textContent = option[text];
            optionElem.value = option[id];
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