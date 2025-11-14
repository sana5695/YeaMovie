import config from "./core/config.js";
import buildModules from "./core/BuildModules.js";

const modal = buildModules.createModule('modal')
modal.mount()

buildModules.createModule('section').initialize({
    displayModule:'list',
    filterModule:'search',
})
buildModules.createModule('section').initialize({
    displayModule:'slider',
    dataSources: [config.TOP_250_MOVIES]
})
buildModules.createModule('section').initialize({
    displayModule:'list',
    dataSources: [config.POPULAR_MOVIES, config.POPULAR_SERIES]
})
buildModules.createModule('section').initialize({
    displayModule:'slider',
    dataSources:[config.COMICS_THEME, config.CATASTROPHE_THEME, config.KIDS_ANIMATION_THEME, config.ZOMBIE_THEME],
})
buildModules.createModule('section').initialize({
    displayModule:'list',
    filterModule:'filter',
})

