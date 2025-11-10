import { MovieService } from "./MovieService.js";
import { Observer } from "./Observer.js";
import { Config } from "./config.js";
import { Modal } from "../UI/Modal/Modal.js";

export class Container {
    constructor() {
        this.config = new Config();
        this.movieService = new MovieService(this.config);
        this.observers = {};
        this.modal = new Modal();
    }

    getObserver(key) {
        if (!this.observers[key]) {
            this.observers[key] = new Observer();
        }
        return this.observers[key];
    }

    createModule(ModelClass, ControllerClass, ViewClass, selector, observerKey, data = []) {
        const movieService = this.movieService;
        const modal = this.modal;
        const config = this.config;
        const observer = this.getObserver(observerKey);
        const model = new ModelClass(movieService, observer, config);
        const controller = new ControllerClass(model);
        return new ViewClass(controller, observer, selector, data, modal);
    }
}
