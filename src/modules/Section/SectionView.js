import {Observer} from "../../core/Observer.js";
import {Container} from "../../UI/Base/Container/Container.js";
import {SectionController} from "./SectionController.js";
import {NavButtons} from "../../UI/NavButtons/NavButtons.js";

export class SectionView {
    static create(options) {
        return new SectionView(options).render();
    }

    constructor(options) {
        const {className, view, data = [], movieService, root, filter} = options;
        this.className = className
        this.view = view
        this.data = data
        this.observer = new Observer()
        this.root = root
        this.movieService = movieService
        this.observer.subscribe((movies) => this.update(movies));
        this.filter = filter

        this.controller = new SectionController({
            observer: this.observer,
            movieService: this.movieService,
        })
    }

    update(movies) {
        this.view.controller.setMovies(movies)
    }

    onLoadMovies = (url) => {
        if (url) this.controller.getMovies(url)
        else this.observer.setState([]);
    }

    render() {
        this.section = Container.create({
            tag: 'section',
            root: this.root,
            className: [this.className],
        });

        if (this.filter) this.filter.mount(this.section, this.className, (url) => this.onLoadMovies(url));
        if (this.data.length > 1) NavButtons.create({root: this.section, data: this.data, listener: this.onLoadMovies});

        this.view.mount(this.section, this.className);
        this.controller.getMovies(this.data[0]?.url)
    }
}