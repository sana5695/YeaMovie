import { Container } from "./core/Container.js";

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

const container = new Container();
const { config } = container;

const search = container.createModule(
    SearchModel,
    SearchController,
    SearchView,
    'search',
    'search',
    [config.URL_SEARCH]
);

const leadMovie = container.createModule(
    SliderModel,
    SliderController,
    SliderView,
    "lead-movie",
    "lead-movie",
    [config.TOP_250_MOVIES]
);

const listView = container.createModule(
    ListModel,
    ListController,
    ListView,
    "movie-list",
    "list",
    [config.POPULAR_MOVIES, config.POPULAR_SERIES]
);

const sliderView = container.createModule(
    SliderModel,
    SliderController,
    SliderView,
    "movie-slider",
    "slider",
    [config.ZOMBIE_THEME, config.CATASTROPHE_THEME, config.KIDS_ANIMATION_THEME, config.COMICS_THEME]
);

const filterView = container.createModule(
    FilterModel,
    FilterController,
    FilterView,
    "movie-filter",
    "filter",
    [config.MOVIE_DATA]
);

search.mount();
leadMovie.mount();
listView.mount();
sliderView.mount();
filterView.mount();

