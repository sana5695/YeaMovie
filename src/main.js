import {MovieService} from "./MovieService.js";
import {Observer} from "./core/Observer.js";
import {Config} from "./config.js";

import {ListView} from "./modules/List/ListView.js";
import {ListModel} from "./modules/List/ListModel.js";
import {ListController} from "./modules/List/ListController.js";


import {SliderView} from "./modules/Slider/SliderView.js";
import {SliderModel} from "./modules/Slider/SliderModel.js";
import {SliderController} from "./modules/Slider/SliderController.js";

import {FilterView} from "./modules/Filter/FilterView.js";
import {FilterModel} from "./modules/Filter/FilterModel.js";
import {FilterController} from "./modules/Filter/FilterController.js";

const movieService = new MovieService();
const listObserver = new Observer();
const sliderObserver = new Observer();
const filterObserver = new Observer();
const config = new Config();


const listModel = new ListModel(movieService, listObserver);
const listController = new ListController(listModel);
const listView = new ListView(
    listController,
    listObserver,
    document.querySelector(".movie-list"),
    [config.POPULAR_MOVIES,config.POPULAR_SERIES,config.PREMIER]
)

const sliderModel = new SliderModel(movieService, sliderObserver);
const sliderController = new SliderController(sliderModel);
const sliderView1 = new SliderView(
    sliderController,
    sliderObserver,
    document.querySelector(".movie-slider"),
    [config.ZOMBIE_THEME,
        config.CATASTROPHE_THEME,
        config.KIDS_ANIMATION_THEME,
        config.COMICS_THEME]
)

const filterModel = new FilterModel(movieService, filterObserver);
const filterController = new FilterController(filterModel);
const filterView = new FilterView(
    filterController,
    filterObserver,
    document.querySelector(".movie-filter"),
)


listView.mount()
sliderView1.mount()
filterView.mount()
