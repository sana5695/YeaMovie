export class BaseSelectView {
    constructor(data, text) {
        this.data = data;
        this.text = text;
    }

    mount(){
        this.select = document.createElement('select');
        if (!this.data) this.select.dataset.id = this.data;
        this.select.innerText = this.text;
        return this.select;
    }

}