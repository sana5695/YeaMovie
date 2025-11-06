import {BaseView} from "../Base/BaseView.js";
import {ButtonFactory} from "../../core/ButtonFactory.js";

export class SliderView extends BaseView {
    constructor(controller, observer, root, urls) {
        super(controller, observer, root, urls);
        this.size = 'big'

        this.observer.subscribe(() => this.getSlides())

        this.container.classList.add('movie-slider__container');
        this.navigation.className = 'slider__nav'

        this.prevButton = ButtonFactory.createButton('<', '','Prev')
        this.nextButton = ButtonFactory.createButton('>', '','Next')

        this.slideIndex = 0
        this.slides = []

        this.bindListeners();
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
            if (index === this.slideIndex) slide.style.display = 'flex';
            else slide.style.display = 'none';
        });
    }

    getSlides(){
        this.slides = Array.from(this.container.querySelectorAll('.big'));
        this.updateSlider();
    }

    mount() {
        this.controller.getMovies(this.urls[0].url);
        this.root.appendChild(this.navigation);
        this.createButtons(this.urls, this.navigation.className);
        this.root.appendChild(this.prevButton);
        this.root.appendChild(this.nextButton);
        this.root.appendChild(this.container);
    }
}