import {Container} from "../../UI/Base/Container/Container.js";

export class MoviesView {
    constructor(options) {
        const {className} = options;
        this.className = className;
    }

    update(options) {
        this.render(options)
    }

    render(options) {
        this.displayModule.update(options);
    }

    mount({root, displayModule, navButtons, filterModule}) {
        this.container = Container.create({tag:'section', root,  className:[this.className]})
        this.displayModule = displayModule
        if(filterModule) filterModule.mount(this.container)
        if(navButtons) navButtons.mount(this.container);
        this.displayModule.mount(this.container)
    }
}