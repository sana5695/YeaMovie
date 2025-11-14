import {ListModel} from "../modules/List/ListModel.js";
import {ListController} from "../modules/List/ListController.js";
import {ListView} from "../modules/List/ListView.js";
import {SliderModel} from "../modules/Slider/SliderModel.js";
import {SliderController} from "../modules/Slider/SliderController.js";
import {SliderView} from "../modules/Slider/SliderView.js";
import {ModalModel} from "../modules/Modal/ModalModel.js";
import {ModalController} from "../modules/Modal/ModalController.js";
import {ModalView} from "../modules/Modal/ModalView.js";

class BuildModules {
    constructor() {
        if (BuildModules.instance) {
            return BuildModules.instance;
        }
        BuildModules.instance = this;

        this.modules = {
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
            }
        };
    }


    createModule(type) {
        const module = this.modules[type];
        const {ModelClass, ControllerClass, ViewClass, className} = module;

        const observerId = Math.random().toString(36).slice(2, 9);
        const model = new ModelClass(observerId);

        const view = new ViewClass({
            className,
            observerId
        })

        return new ControllerClass(model, view);
    }

}

const buildModules = new BuildModules();
export default buildModules;

