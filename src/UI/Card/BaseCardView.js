export class BaseCardView {
    constructor(movie, size) {
        this.movie = movie;
        this.size = size
    }

    render() {
        return `
      <article class="card ${this.size}" data-id="${this.movie.id}">
        ${this.renderContent()}
      </article>
    `;
    }
}
