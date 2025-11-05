export class BaseButtonView {
    constructor(data, text) {
        this.data = data;
        this.text = text;
    }

    mount(){
        this.button = document.createElement('button');
        this.button.dataset.id = this.data;
        this.button.innerText = this.text;
        return this.button;
    }

}