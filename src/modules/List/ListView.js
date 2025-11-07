import {BaseView} from "../Base/BaseView.js";
import {Button} from "../Button/Button.js";

export class ListView extends BaseView {
    constructor(controller, observer, root, data) {
        super(controller, observer, root, data);

        this.container.classList.add('movie-list__container', 'hidden');
        this.navigation.className = 'list__nav'
    }

    onExpandClick = () => {
        this.expandButton.innerText = this.controller.handleExpand(this.container, this.expandButton.innerText)
    }

    bindListeners() {
        this.navListener(this.navigation)
        this.expandButton.addEventListener('click', this.onExpandClick)
    }

    mount() {
        this.controller.getMovies(this.data[0].url);
        this.root.appendChild(this.navigation)
        this.root.appendChild(this.container);
        this.expandButton = Button.create('Развернуть', this.root.className);
        this.createNavButtons(this.data, this.navigation.className);
        this.bindListeners();
    }
}