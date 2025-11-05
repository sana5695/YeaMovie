export class BaseCardView {
    constructor(movie, size) {
        this.movie = movie;
        this.size = size
    }

    render() {
        return `
      <div class="card ${this.size}">
        ${this.renderContent()}
      </div>
    `;
    }

    renderContent() {
    }
}
