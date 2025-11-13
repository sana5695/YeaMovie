import config from "./core/config.js";

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

import {MoviesView} from "./modules/Movies/MoviesView.js";
import {ModalView} from "./modules/Modal/ModalView.js";

const buildModules = new BuildModules();
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

new ModalView(buildModules.createModule(slider));

MoviesView.create({
    view: buildModules.createModule(list,"search"),
    filter: buildModules.createModule(search),
    root: main,
    className:"search",
    type:'small',
})
MoviesView.create({
    view: buildModules.createModule(slider, "lead-movie"),
    root: main,
    className:"lead-movie",
    data:[config.TOP_250_MOVIES],
    type:'big',
})
MoviesView.create({
    view: buildModules.createModule(list, "top-movie"),
    root: main,
    className:"top-movie",
    data:[config.POPULAR_MOVIES, config.POPULAR_SERIES],
    type:'small',
})
MoviesView.create({
    view: buildModules.createModule(slider, "movie-themes"),
    root: main,
    className:"movie-themes",
    data:[config.ZOMBIE_THEME, config.CATASTROPHE_THEME, config.KIDS_ANIMATION_THEME, config.COMICS_THEME],
    type:'big',
})
MoviesView.create({
    view: buildModules.createModule(list,"movie-filter"),
    filter: buildModules.createModule(filter),
    root: main,
    className:"movie-filter",
    type:'small',
})