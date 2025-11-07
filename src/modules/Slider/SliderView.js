import {BaseView} from "../Base/BaseView.js";
import {Button} from "../Button/Button.js";

export class SliderView extends BaseView {
    constructor(controller, observer, root, data) {
        super(controller, observer, root, data);
        this.size = 'big'

        this.observer.subscribe(() => this.getSlides())

        this.container.classList.add('movie-slider__container');
        this.navigation.className = 'slider__nav'

        this.arrowsContainer = document.createElement('div');
        this.arrowsContainer.className = 'movie-slider__arrows-container';
        this.root.appendChild(this.arrowsContainer);

        this.slideIndex = 0
        this.slides = []

    }

    bindListeners() {
        this.navListener(this.navigation)
        this.prevButton.addEventListener('click', (event) => this.onChangeSlide(event.target.dataset.id));
        this.nextButton.addEventListener('click', (event) => this.onChangeSlide(event.target.dataset.id));
    }

    onChangeSlide = (data) => {
        if (data === 'Prev')this.slideIndex = this.controller.handlePreviousSlide(this.slideIndex)
        if (data === 'Next')this.slideIndex = this.controller.handleNextSlide(this.slideIndex)
        this.updateSlider();
    }

    updateSlider() {
        this.slides.forEach((slide, index) => {
            slide.style.display = index === this.slideIndex ? "flex" : "none";
        });
    }

    getSlides(){
        this.slides = Array.from(this.container.querySelectorAll('.big'));
        this.updateSlider();
    }

    mount() {
        this.controller.getMovies(this.data[0].url);
        this.root.append(this.navigation, this.container);
        this.createNavButtons(this.data, this.navigation.className, 'nav');
        this.prevButton = Button.create('<', this.arrowsContainer.className, 'arrow','Prev')
        this.nextButton = Button.create('>', this.arrowsContainer.className,'arrow','Next')
        this.bindListeners();
    }
}