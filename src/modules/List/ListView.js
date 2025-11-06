import {BaseView} from "../Base/BaseView.js";
import {ButtonFactory} from "../../core/ButtonFactory.js";

export class ListView extends BaseView {
    constructor(controller, observer, root, urls) {
        super(controller, observer, root, urls);


        this.expandButton = ButtonFactory.createButton('Развернуть', )
        this.container.classList.add('movie-list__container', 'hidden');
        this.navigation.className = 'list__nav'

        this.bindListeners();
    }

    onExpandClick = () => {
        this.expandButton.innerText = this.controller.handleExpand(this.container, this.expandButton.innerText)
    }

    bindListeners() {
        this.navListener(this.navigation)
        this.expandButton.addEventListener('click', this.onExpandClick)
    }

    mount() {
        this.controller.getMovies(this.urls[0].url);
        this.root.appendChild(this.navigation)
        this.root.appendChild(this.container);
        this.root.appendChild(this.expandButton)
        this.createButtons(this.urls, this.navigation.className);
    }
}