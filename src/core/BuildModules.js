import {ListModel} from "../modules/List/ListModel.js";
import {ListController} from "../modules/List/ListController.js";
import {ListView} from "../modules/List/ListView.js";
import {SliderModel} from "../modules/Slider/SliderModel.js";
import {SliderController} from "../modules/Slider/SliderController.js";
import {SliderView} from "../modules/Slider/SliderView.js";
import {ModalModel} from "../modules/Modal/ModalModel.js";
import {ModalController} from "../modules/Modal/ModalController.js";
import {ModalView} from "../modules/Modal/ModalView.js";
import {MoviesModel} from "../modules/Movies/MoviesModel.js";
import {MoviesController} from "../modules/Movies/MoviesController.js";
import {MoviesView} from "../modules/Movies/MoviesView.js";
import {FilterModel} from "../modules/Filter/FilterModel.js";
import {FilterController} from "../modules/Filter/FilterController.js";
import {FilterView} from "../modules/Filter/FilterView.js";
import {SearchModel} from "../modules/Search/SearchModel.js";
import {SearchController} from "../modules/Search/SearchController.js";
import {SearchView} from "../modules/Search/SearchView.js";

class BuildModules {
    constructor() {
        if (BuildModules.instance) {
            return BuildModules.instance;
        }
        BuildModules.instance = this;

        this.modules = {
            section:{
                ModelClass: MoviesModel,
                ControllerClass: MoviesController,
                ViewClass: MoviesView,
                className: ["section"],
            },
            list: {
                ModelClass: ListModel,
                ControllerClass: ListController,
                ViewClass: ListView,
                className: ["list"],
            },
            slider: {
                ModelClass: SliderModel,
                ControllerClass: SliderController,
                ViewClass: SliderView,
                className: ["slider"],
            },
            modal: {
                ModelClass: ModalModel,
                ControllerClass: ModalController,
                ViewClass: ModalView,
                className: ["modal"],
            },
            filter: {
                ModelClass: FilterModel,
                ControllerClass: FilterController,
                ViewClass: FilterView,
                className: ["filter"],
            },
            search: {
                ModelClass: SearchModel,
                ControllerClass: SearchController,
                ViewClass: SearchView,
                className: ["search"],
            }
        };
    }


    createModule(type,options) {
        const module = this.modules[type];
        const {ModelClass, ControllerClass, ViewClass, className} = module;

        const observerId = Math.random().toString(36).slice(2, 9);

        const model = new ModelClass();
        const view = new ViewClass({className})
        return new ControllerClass(model, view, observerId, options);
    }

}

const buildModules = new BuildModules();
export default buildModules;

