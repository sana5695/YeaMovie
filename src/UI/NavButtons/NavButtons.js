import {Container} from "../Base/Container/Container.js";
import {Button} from "../Base/Button/Button.js";

export class NavButtons{
    static create(options){
        return new NavButtons(options).createNavButtons();
    }
    constructor(options){
        const {root, data, listener} = options;
        this.root = root;
        this.data = data;
        this.listener = listener;
    }
    createNavButtons() {
        this.buttonMap = new Map();

        this.navigation = Container.create({
            tag: 'nav',
            root: this.root,
            className: [`${this.className}__nav`]
        })

        this.data.forEach((buttonData, index) => {
            const classes = ['button', 'nav__button'];
            if (index === 0) {
                classes.push('active');
            }
            const button = Button.create({
                text: buttonData.name,
                root: this.navigation,
                listener: (event) => this.navListener(event, this.listener),
                className: classes
            });
            this.buttonMap.set(button, buttonData.url);
        });
    }

    navListener(event, listener) {
        if (event.target !== this.navigation.querySelector('.active')) {
            const active = event.target
            this.buttonMap.keys().forEach(button => {
                if (button === active) button.classList.add('active');
                else button.classList.remove('active');
            })
            listener(this.buttonMap.get(event.target));
        }
    }
}

