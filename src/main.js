import {BuildModules} from "./core/BuildModules.js";

import {ListView} from "./modules/List/ListView.js";
import {ListModel} from "./modules/List/ListModel.js";
import {ListController} from "./modules/List/ListController.js";

import {SliderView} from "./modules/Slider/SliderView.js";
import {SliderModel} from "./modules/Slider/SliderModel.js";
import {SliderController} from "./modules/Slider/SliderController.js";

import {FilterView} from "./modules/Filter/FilterView.js";
import {FilterModel} from "./modules/Filter/FilterModel.js";
import {FilterController} from "./modules/Filter/FilterController.js";

import {SearchController} from "./modules/Search/SearchController.js";
import {SearchModel} from "./modules/Search/SearchModel.js";
import {SearchView} from "./modules/Search/SearchView.js";

import {SectionView} from "./modules/Section/SectionView.js";
import {Modal} from "./modules/Modal/Modal.js";

const buildModules = new BuildModules();
const {config, movieService} = buildModules;


const main = document.querySelector("main");

const list = {
    ModelClass: ListModel,
    ControllerClass: ListController,
    ViewClass: ListView,
    className:['list']
}

const slider = {
    ModelClass: SliderModel,
    ControllerClass: SliderController,
    ViewClass: SliderView,
    className:['slider']
}

const filter = {
    ModelClass: FilterModel,
    ControllerClass: FilterController,
    ViewClass: FilterView,
    className:['filter']
}

const search = {
    ModelClass: SearchModel,
    ControllerClass: SearchController,
    ViewClass: SearchView,
    className:['search']
}

const modal = new Modal(buildModules.createModule(slider, "screenshots", 'screenshot'));

SectionView.create({
    view: buildModules.createModule(list,"search", 'small' ,modal),
    filter: buildModules.createModule(search),
    movieService: movieService,
    root: main,
    className:"search"
})

SectionView.create({
    view: buildModules.createModule(slider, "lead-movie", 'big',modal),
    movieService: movieService,
    root: main,
    className:"lead-movie",
    data:[config.TOP_250_MOVIES]
})
SectionView.create({
    view: buildModules.createModule(list, "top-movie",'small', modal),
    movieService: movieService,
    root: main,
    className:"top-movie",
    data:[config.POPULAR_MOVIES, config.POPULAR_SERIES]
})
SectionView.create({
    view: buildModules.createModule(slider, "movie-themes",'big', modal),
    movieService: movieService,
    root: main,
    className:"movie-themes",
    data:[config.ZOMBIE_THEME, config.CATASTROPHE_THEME, config.KIDS_ANIMATION_THEME, config.COMICS_THEME]
})
SectionView.create({
    view: buildModules.createModule(list,"movie-filter",'small', modal),
    filter: buildModules.createModule(filter),
    movieService: movieService,
    root: main,
    className:"movie-filter",
})




