import fetchService from "../../core/FetchService.js";
import store from "../../core/Strore.js";
export class SectionModel {
    constructor(){
    }

    async getData(dataSource){
        return store.has(dataSource.name)
            ? store.get(dataSource.name)
            : await this.loadData(dataSource);
    }

    async loadData(dataSource){
        const moviesData = await fetchService.loadFilms(dataSource.url);
        if (dataSource.name) store.set(dataSource.name, moviesData)
        return moviesData;
    }
}