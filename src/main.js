import config from "./core/config.js";

import buildModules from "./core/BuildModules.js";

import {MoviesView} from "./modules/Movies/MoviesView.js";
import {Search} from "./modules/Search/Search.js";
import {Filter} from "./modules/Filter/Filter.js";

const modal = buildModules.createModule('modal')
modal.mount()

const search = new Search({className:'search'});
const filter = new Filter({className:'filter'});


MoviesView.create({
    movieController: buildModules.createModule('list'),
    filter: search,
    className:"search-results",
    type:'small',
})
MoviesView.create({
    movieController: buildModules.createModule('slider'),
    className:"lead-movie",
    data:[config.TOP_250_MOVIES],
    type:'big',
})
MoviesView.create({
    movieController: buildModules.createModule('list'),
    className:"top-movie",
    data:[config.POPULAR_MOVIES, config.POPULAR_SERIES],
    type:'small',
})
MoviesView.create({
    movieController: buildModules.createModule('slider'),
    className:"movie-themes",
    data:[config.ZOMBIE_THEME, config.CATASTROPHE_THEME, config.KIDS_ANIMATION_THEME, config.COMICS_THEME],
    type:'big',
})
MoviesView.create({
    movieController: buildModules.createModule('list'),
    filter: filter,
    className:"movie-filter",
    type:'small',
})
