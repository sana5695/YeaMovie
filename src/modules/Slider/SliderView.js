import {Button} from "../../UI/Base/Button/Button.js";
import {Container} from "../../UI/Base/Container/Container.js";
import observer from "../../core/Observer.js";

export class SliderView {
    constructor({ controller, className, observerid }) {
        this.controller = controller;
        this.className = className;
        this.observerid = observerid;
        this.type = this.type || 'big';
        this.slideIndex = 0;
        this.slides = [];
        this.observerKey = `SLIDES_CREATE${this.observerid}`
    }

    updateSlides(movies) {
        this.slides = movies;
        this.slideIndex = 0;
        this.updateSlider();
    }

    update(movies) {
        this.render(movies);
    }

    render(movies) {
        if (!this.container) return;
        this.container.innerHTML = '';
        if (!movies || !movies.length) return;
        movies.forEach(movie => {
            this.container.appendChild(movie);
        });
        observer.notify(this.observerKey, movies);
    }

    updateSlider() {
        this.slides.forEach((slide, index) => {
            slide.style.display = index === this.slideIndex ? "flex" : "none";
        });
    }

    onChangeSlide(direction) {
        if (direction === 'Prev')
            this.slideIndex = this.controller.handlePreviousSlide(this.slideIndex);
        else
            this.slideIndex = this.controller.handleNextSlide(this.slideIndex);
        this.updateSlider();
    }

    mount(root, ) {
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
        observer.subscribe(this.observerKey, this.updateSlides.bind(this));
    }
}