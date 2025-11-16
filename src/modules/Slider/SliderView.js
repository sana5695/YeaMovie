import {Button} from "../../UI/Base/Button/Button.js";
import {Container} from "../../UI/Base/Container/Container.js";

export class SliderView {
    constructor({className}) {
        this.className = className;
    }

    update(movies) {
        this.clear()
        this.movies = movies;
        this.visibleSlide(0)
        this.render(this.movies);
    }

    render(movies) {
        if (!movies || !movies.length) return;
        movies.forEach(movie => this.cardContainer.appendChild(movie));
    }

    updateSlide(slide, style) {
        slide.style.display = style
    }

    visibleSlide(slideIndex) {
        this.movies.forEach((slide, index) => {
            this.updateSlide(slide, index === slideIndex ? "flex" : "none")
        });
    }

    clear() {
        this.cardContainer.innerHTML = '';
    }

    mount(root) {
        this.container = Container.create({
            tag: 'div',
            root: root,
            className: ['container']
        });
        this.slider = Container.create({
            tag: 'div',
            root: this.container,
            className: ['slider'],
        });
        Button.create({
            text: '<',
            root: this.slider,
            listener: () => this.onChangeSlide('Prev'),
            className: ['arrow']
        });
        this.cardContainer = Container.create({
            tag: 'div',
            root: this.slider,
            className: ['slider__card-container'],
        });
        Button.create({
            text: '>',
            root: this.slider,
            listener: () => this.onChangeSlide('Next'),
            className: ['arrow']
        });
    }
}