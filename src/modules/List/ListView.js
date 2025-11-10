import {BaseView} from "../Base/BaseView.js";
export class ListView extends BaseView {
    constructor(controller, observer, root, data, modal) {
        super(controller, observer, root, data, modal);
    }

    bindListeners() {
        this.cardListener(this.container);
        this.navListener(this.navigation);
    }

    mount() {
        document.querySelector('main').appendChild(this.root)
        this.controller.getMovies(this.data[0].url);
        this.root.append(this.navigation, this.container)
        this.createNavButtons(this.data, this.navigation.className);
        this.bindListeners();
    }
}