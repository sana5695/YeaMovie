import {MovieService} from "./MovieService.js";
import {Observer} from "./core/Observer.js";

import {ListView} from "./modules/List/ListView.js";
import {ListModel} from "./modules/List/ListModel.js";
import {ListController} from "./modules/List/ListController.js";

import {SliderView} from "./modules/Slider/SliderView.js";
import {SliderModel} from "./modules/Slider/SliderModel.js";
import {SliderController} from "./modules/Slider/SliderController.js";

const movieService = new MovieService();
const listObserver = new Observer();


const listModel = new ListModel(movieService, listObserver);
const listController = new ListController(listModel);
const listView = new ListView(listController, listObserver, document.querySelector(".movie-list"))

const sliderModel = new SliderModel(movieService, listObserver);
const sliderController = new SliderController(listModel);
const sliderView = new SliderView(listController, listObserver, document.querySelector(".movie-slider"));


listView.mount()
sliderView.mount()