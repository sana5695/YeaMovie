import config from "./core/config.js";
import buildModules from "./core/BuildModules.js";

buildModules.createModule('modal').mount()

buildModules.createModule(
    'section',
    {
        displayModule: buildModules.createModule('list'),
        filterModule: buildModules.createModule('search'),
    })

buildModules.createModule(
    'section',
    {
        displayModule: buildModules.createModule('slider'),
        dataSources: [config.TOP_250_MOVIES],
    })

buildModules.createModule(
    'section',
    {
        displayModule: buildModules.createModule('list'),
        dataSources: [config.POPULAR_MOVIES, config.POPULAR_SERIES],
    })

buildModules.createModule(
    'section',
    {
        displayModule: buildModules.createModule('slider'),
        dataSources: [config.COMICS_THEME, config.CATASTROPHE_THEME, config.KIDS_ANIMATION_THEME, config.ZOMBIE_THEME],
    })

buildModules.createModule(
    'section',
    {
        displayModule: buildModules.createModule('list'),
        filterModule: buildModules.createModule('filter'),
    })


