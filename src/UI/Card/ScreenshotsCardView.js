import {BaseCardView} from "./BaseCardView.js";
import {Img} from "../Base/Img/Img.js";
import {Container} from "../Base/Container/Container.js";

export class ScreenshotsCardView extends BaseCardView {

    create() {
        this.cardContainer = Container.create({tag:'div', root:this.root, className:[this.type], data:this.movie.id});
        this.renderContent()
        return this.cardContainer
    }
    renderContent() {
        const poster = this.movie;

        Img.create({
            src: poster,
            root: this.cardContainer,
            alt: '',
            className: ['screenshot']
        })
    }
}