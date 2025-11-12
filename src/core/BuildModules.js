import { MovieService } from "./MovieService.js";
import { Observer } from "./Observer.js";
import {Config} from "./config.js";

export class BuildModules {
    constructor() {
        this.config = new Config();
        this.movieService = new MovieService(this.config);
        this.observers = {};
    }

    getObserver(key) {
        if (!this.observers[key]) this.observers[key] = new Observer();
        return this.observers[key];
    }

    createModule(module, observerKey, type, modal) {
        const {ModelClass, ControllerClass, ViewClass, className} = module
        const movieService = this.movieService;
        const observer = this.getObserver(observerKey);
        const config = this.config;
        const model = new ModelClass({movieService, observer});
        const controller = new ControllerClass(model);
        return new ViewClass({controller, observer, className, config, modal, type});
    }
}
