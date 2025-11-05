import {MovieService} from "./models/MovieService.js";
import {Observer} from "./core/Observer.js";
import { MoviesListView } from './view/MoviesListView.js';
import { MoviesController } from './controllers/MoviesController.js';
import { FetchStrategy } from './core/FetchStrategy.js';
import {Config} from "./config.js";

const config = new Config()
const service  = new MovieService(config);
const moviesObserver  = new Observer();
const fetchStrategy = new FetchStrategy(service, config);
const bigListView = new MoviesListView("movie-list__list", "big");
const smallListView = new MoviesListView(".movie-list__container");
const list = document.querySelector(".movie-list__container");


const controller = new MoviesController(
    service,
    fetchStrategy,
    bigListView,
    smallListView,
    moviesObserver
);

controller.init()

document.querySelectorAll("[data-type]").forEach(btn => {
    btn.addEventListener("click", () => {
        const type = btn.dataset.type;
        console.log(type)
        controller.filterMovies(type);
    });
});

document.querySelector('.movie-list__loader-button').addEventListener('click', () => {
    list.classList.toggle('hidden');
})
