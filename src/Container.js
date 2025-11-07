import { MovieService } from "./MovieService.js";
import { Observer } from "./core/Observer.js";
import { Config } from "./config.js";

export class Container {
    constructor() {
        this.movieService = new MovieService();
        this.config = new Config();
        this.observers = {};
    }

    getObserver(key) {
        if (!this.observers[key]) {
            this.observers[key] = new Observer();
        }
        return this.observers[key];
    }

    createModule(ModelClass, ControllerClass, ViewClass, selector, observerKey, data = []) {
        const { movieService } = this;
        const observer = this.getObserver(observerKey);
        const model = new ModelClass(movieService, observer);
        const controller = new ControllerClass(model);
        return new ViewClass(controller, observer, document.querySelector(selector), data);
    }
}
