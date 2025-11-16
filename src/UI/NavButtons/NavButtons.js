import {Container} from "../Base/Container/Container.js";
import {Button} from "../Base/Button/Button.js";

export class NavButtons{
    static create(options){
        return new NavButtons(options).render();
    }

    constructor(options){
        const {data} = options;
        this.data = data;
        this.buttonMap = new Map();
    }

    render() {
        this.navigation = Container.create({
            tag: 'nav',
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
        return this;
    }

    navListener(event) {
        const activeButton = event.currentTarget;

        if (activeButton.classList.contains('active')) return;

        this.buttonMap.forEach((url, button) => {
            button.classList.toggle('active', button === activeButton);
        });

        this.onData({url:this.buttonMap.get(activeButton), name:activeButton.textContent});
    }


    mount(root){
        root.appendChild(this.navigation);
    }

}

