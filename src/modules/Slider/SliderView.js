import {Button} from "../../UI/Base/Button/Button.js";
import {Container} from "../../UI/Base/Container/Container.js";

export class SliderView  {
    constructor({className}) {
        this.className = className;
    }

    update(movies) {
        this.container.innerHTML = '';
        this.render(movies);
    }

    render(movies) {
        if (!movies || !movies.length) return;
        movies.forEach(movie => this.container.appendChild(movie));
    }

    updateSlide(slide, style) {
            slide.style.display = style
    }

    mount(root) {
        this.arrows = Container.create({
            tag: 'div',
            root: root,
            className: ['slider-container']
        });
        Button.create({
            text: '<',
            root: this.arrows,
            listener: () => this.onChangeSlide('Prev'),
            className: ['arrow']
        });
        this.container = Container.create({
            tag: 'div',
            root: this.arrows,
            className: [this.className],
        });
        Button.create({
            text: '>',
            root: this.arrows,
            listener: () => this.onChangeSlide('Next'),
            className: ['arrow']
        });
    }
}