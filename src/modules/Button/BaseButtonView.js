export class BaseButtonView {
    constructor(data, text) {
        this.data = data;
        this.text = text;
    }

    mount(){
        this.button = document.createElement('button');
        if (this.data) this.button.dataset.id = this.data;
        this.button.innerText = this.text;
        return this.button
    }

    render(){
        return this.mount()
    }

}