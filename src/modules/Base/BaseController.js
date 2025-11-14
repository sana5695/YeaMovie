export class BaseController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    mount(options) {
        this.view.mount(options)
    }

    update(options) {
        this.view.update(options)
    }
}