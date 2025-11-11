import { BuildModules } from "./core/BuildModules.js";

import { ListView } from "./modules/List/ListView.js";
import { ListModel } from "./modules/List/ListModel.js";
import { ListController } from "./modules/List/ListController.js";

import { SliderView } from "./modules/Slider/SliderView.js";
import { SliderModel } from "./modules/Slider/SliderModel.js";
import { SliderController } from "./modules/Slider/SliderController.js";

import { FilterView } from "./modules/Filter/FilterView.js";
import { FilterModel } from "./modules/Filter/FilterModel.js";
import { FilterController } from "./modules/Filter/FilterController.js";

import { SearchController } from "./modules/Search/SearchController.js";
import { SearchModel } from "./modules/Search/SearchModel.js";
import { SearchView } from "./modules/Search/SearchView.js";

const container = new BuildModules();
const { config } = container;

const main = document.querySelector("main");
const header = document.querySelector("header");

const search = container.createModule(
    SearchModel,
    SearchController,
    SearchView,
    'search--result',
    header,
    'search--result',
    []
);

const leadMovie = container.createModule(
    SliderModel,
    SliderController,
    SliderView,
    "lead-movie",
    main,
    "lead-movie",
    [config.TOP_250_MOVIES],
    config.TYPE_CARD.large
);

const listView = container.createModule(
    ListModel,
    ListController,
    ListView,
    "movie-list",
    main,
    "list",
    [config.POPULAR_MOVIES, config.POPULAR_SERIES],
    config.TYPE_CARD.small
);

const sliderView = container.createModule(
    SliderModel,
    SliderController,
    SliderView,
    "movie-slider",
    main,
    "slider",
    [config.ZOMBIE_THEME, config.CATASTROPHE_THEME, config.KIDS_ANIMATION_THEME, config.COMICS_THEME],
    config.TYPE_CARD.large
);

const filterView = container.createModule(
    FilterModel,
    FilterController,
    FilterView,
    "movie-filter",
    main,
    "filter",
    [],
    config.TYPE_CARD.small
);

search.mount();
leadMovie.mount();
listView.mount();
sliderView.mount();
filterView.mount();

