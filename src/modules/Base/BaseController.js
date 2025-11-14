export class BaseController {
    constructor(model, view, observerId) {
        this.model = model;
        this.view = view;
        this.observerKey = `OBSERVER__${observerId}`;
    }

    mount(options) {
        this.view.mount(options)
    }

    update(options) {
        this.view.update(options)
    }
}