import { Observer } from "./Observer.js";

export class BuildModules {
    constructor() {
    }


    createModule(module) {
        const {ModelClass, ControllerClass, ViewClass, className} = module
        const observer = new Observer()
        const model = new ModelClass({observer});
        const controller = new ControllerClass(model);
        return new ViewClass({controller, observer, className});
    }
}
