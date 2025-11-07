export class Select {

    static create(name, options, selector, className, data) {
        return new Select(name, options, selector, className, data).render();
    }

    constructor(name, options, selector, className, data) {
        this.name = name;
        this.options = options;
        this.selector = `.${selector.split(' ')[0]}`;
        this.className = className;
        this.data = data;
        this.title = document.createElement('h3')
        this.title.textContent = name;
    }

    createSelect() {
        this.select = document.createElement('select');
        this.select.name = this.name;
        if(this.className) this.select.className = this.className;
        if(this.data) this.select.dataset.id = this.data;
        this.container.appendChild(this.select);

    }

    createContainer(){
        this.container = document.createElement('div');
        document.querySelector(this.selector).appendChild(this.container);
        this.container.appendChild(this.title);
    }

    createOptions() {
        this.options.forEach((option) => {
            const optionElem = document.createElement('option');
            optionElem.textContent = option;
            this.select.appendChild(optionElem);
        })
    }

    render() {
        this.createContainer()
        this.createSelect()
        this.createOptions();
        return this.select;
    }
}