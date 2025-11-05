import {CardFactory} from "../../core/CardFactory.js";
import {ButtonFactory} from "../../core/ButtonFactory.js";

export class SliderView {
    constructor(controller, observer, root) {
        this.root = root;
        this.observer = observer;
        this.controller = controller;
        this.size = 'big'

        this.observer.subscribe((movies) => this.update(movies));

        this.listNav = document.createElement('nav')

        this.listContainer = document.createElement('div');
        this.listContainer.classList.add('movie-slider__container');

        this.bindListeners();
    }



    bindListeners() {

    }

    update(movies) {
        this.render(movies);
    }

    render(movies) {
        const movieCardsHtml = movies.map(movie => {
            return CardFactory.createCard(movie, this.size).render();
        });
        this.listContainer.innerHTML = movieCardsHtml.join('');
        const slider = this.listContainer
        const prevButton = document.querySelector('.prev-button');
        const nextButton = document.querySelector('.next-button');
        const slides = Array.from(slider.querySelectorAll('.big'));
        const slideCount = slides.length;
        let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
        prevButton.addEventListener('click', showPreviousSlide);
        nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
        function showPreviousSlide() {
            slideIndex = (slideIndex - 1 + slideCount) % slideCount;
            updateSlider();
        }

// Функция для показа следующего слайда
        function showNextSlide() {
            slideIndex = (slideIndex + 1) % slideCount;
            updateSlider();
        }

// Функция для обновления отображения слайдера
        function updateSlider() {
            slides.forEach((slide, index) => {
                if (index === slideIndex) {
                    slide.style.display = 'flex';
                } else {
                    slide.style.display = 'none';
                }
            });
        }

        console.log(slideCount)

// Инициализация слайдера
        updateSlider();

    }


    mount() {
        this.controller.getMovies();
        this.root.appendChild(this.listNav)
        this.root.appendChild(this.listContainer);
    }

}