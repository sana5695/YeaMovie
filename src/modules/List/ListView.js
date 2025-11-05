import {CardFactory} from "../../core/CardFactory.js";
import {ButtonFactory} from "../../core/ButtonFactory.js";

export class ListView {
    constructor(controller, observer, root) {
        this.root = root;
        this.observer = observer;
        this.controller = controller;

        this.observer.subscribe((movies) => this.update(movies));

        this.listNav = document.createElement('nav')

        this.popullarFilmsButton = ButtonFactory.createButton('Популярные фильмы', 'nav','POPULAR_MOVIES')
        this.popullarSeriesButton = ButtonFactory.createButton('Популярные сериалы', 'nav','POPULAR_SERIES')
        this.premierButton = ButtonFactory.createButton('Премьеры', 'nav','PREMIER')
        this.expandButton = ButtonFactory.createButton('Развернуть', )

        this.listContainer = document.createElement('div');
        this.listContainer.classList.add('movie-list__container', 'hidden');

        this.bindListeners();
    }

    onLoadMoviesClick = (url) => {
        this.controller.getMovies(url)
    }

    onExpandClick = () => {
        this.expandButton.innerText = this.controller.handleExpand(this.listContainer, this.expandButton.innerText)
    }

    bindListeners() {
        this.listNav.addEventListener('click', event => {
            this.onLoadMoviesClick(event.target.dataset.id);
        })
        this.expandButton.addEventListener('click', this.onExpandClick)
    }

    update(movies) {
        this.render(movies);
    }

    render(movies) {
        const movieCardsHtml = movies.map(movie => {
            return CardFactory.createCard(movie, this.size).render();
        });
        this.listContainer.innerHTML = movieCardsHtml.join('');
    }

    mount() {
        this.controller.getMovies();
        this.root.appendChild(this.listNav)
        this.listNav.appendChild(this.popullarFilmsButton);
        this.listNav.appendChild(this.popullarSeriesButton);
        this.listNav.appendChild(this.premierButton);
        this.root.appendChild(this.listContainer);
        this.root.appendChild(this.expandButton)
    }

}