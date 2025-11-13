export class BaseUi {
    static create(options) {
    }


    constructor(options) {
        const {text, root, listener, className, data, tag, href, src, alt, optionsSelect, pospend = 'appendChild'} = options;
        this.text = text;
        this.root = root;
        this.className = className;
        this.data = data;
        this.listener = listener
        this.tag = tag;
        this.href = href;
        this.src = src;
        this.alt = alt;
        this.optionsSelect = optionsSelect || [];
        this.pospend = pospend;
    }

    createElem() {
        this.elem = document.createElement(this.tag);
    }

    createOptions() {
        if (this.text) this.elem.textContent = this.text;
        if (this.className) this.elem.classList.add(...this.className);
        if (this.data) this.elem.dataset.id = this.data;
    }

    render() {
        this.createElem();
        this.createOptions()
        if (this.root){
            this.root[this.pospend](this.elem);
        }
        return this.elem;
    }
}