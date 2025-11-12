import {SliderModel} from "../Slider/SliderModel";
import {SliderController} from "../Slider/SliderController";
import {SliderView} from "../Slider/SliderView";
import {ListView} from "../List/ListView";
import {ListModel} from "../List/ListModel";
import {ListController} from "../List/ListController";

export class SectionView {
    constructor(options) {
        const {
            className,
            type,
            buildModules,
            config
        } = options;
        this.className = className
        this.type = type
        this.buildModules = buildModules
        this.config = config
    }

    dataTypeView(type) {
        switch (type) {
            case 'slider':
                this.dataView = this.buildModules.createModule(
                    SliderModel,
                    SliderController,
                    SliderView
                )
                break;
            default:
                this.dataView = this.buildModules.createModule(
                    ListModel,
                    ListController,
                    ListView
                )
        }
    }
}