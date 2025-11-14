import fetchService from "../../core/FetchService.js";

export class MoviesModel {
    constructor(){
        this.state = new Map
    }

    async getData(dataSource){
        return this.state.has(dataSource.name)
            ? this.state.get(dataSource.name)
            : await this.loadData(dataSource);
    }

    async loadData(dataSource){
        console.log('fetching...')
        const moviesData = await fetchService.loadFilms(dataSource.url);
        if (dataSource.name){
            this.state.set(dataSource.name, moviesData)
        }
        return moviesData;
    }
}