import {Container} from "../../UI/Base/Container/Container.js";
import {Button} from "../../UI/Base/Button/Button.js";
import observer from "../../core/Observer.js";

export class NavButtons{
    static create(options){
        return new NavButtons(options).createNavButtons();
    }
    constructor(options){
        const {root, data, observerKey} = options;
        this.root = root;
        this.data = data;
        this.observerKey = observerKey;
        this.buttonMap = new Map();
    }
    createNavButtons() {
        this.navigation = Container.create({
            tag: 'nav',
            root: this.root,
            className: [`movies__nav`]
        })

        this.data.forEach((buttonData, index) => {
            const classes = ['button', 'nav__button'];
            if (index === 0) classes.push('active');

            const button = Button.create({
                text: buttonData.name,
                root: this.navigation,
                listener: (event) => this.navListener(event),
                className: classes
            });
            this.buttonMap.set(button, buttonData.url);
        });
    }

    navListener(event) {
        const activeButton = event.currentTarget;

        if (activeButton.classList.contains('active')) return;

        this.buttonMap.forEach((url, button) => {
            button.classList.toggle('active', button === activeButton);
        });
        observer.notify(this.observerKey,{url:this.buttonMap.get(activeButton), name:activeButton.textContent});
    }
}

