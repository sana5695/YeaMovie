import { Container } from "./Container.js";

import {ListView} from "./modules/List/ListView.js";
import {ListModel} from "./modules/List/ListModel.js";
import {ListController} from "./modules/List/ListController.js";

import {SliderView} from "./modules/Slider/SliderView.js";
import {SliderModel} from "./modules/Slider/SliderModel.js";
import {SliderController} from "./modules/Slider/SliderController.js";

import {FilterView} from "./modules/Filter/FilterView.js";
import {FilterModel} from "./modules/Filter/FilterModel.js";
import {FilterController} from "./modules/Filter/FilterController.js";

const container = new Container();
const { config } = container;

const listView = container.createModule(
    ListModel,
    ListController,
    ListView,
    ".movie-list",
    "list",
    [config.POPULAR_MOVIES, config.POPULAR_SERIES, config.PREMIER]
);

const sliderView = container.createModule(
    SliderModel,
    SliderController,
    SliderView,
    ".movie-slider",
    "slider",
    [config.ZOMBIE_THEME, config.CATASTROPHE_THEME, config.KIDS_ANIMATION_THEME, config.COMICS_THEME]
);

const filterView = container.createModule(
    FilterModel,
    FilterController,
    FilterView,
    ".movie-filter",
    "filter"
);

listView.mount();
sliderView.mount();
filterView.mount();

