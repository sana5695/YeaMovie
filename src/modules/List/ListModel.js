import {BaseModel} from "../Base/BaseModel.js";

export class ListModel extends BaseModel{
    constructor(movieService, observer) {
        super(movieService, observer)
    }

    expand(list, text) {
        list.classList.toggle('hidden');
        return text === 'Развернуть' ? 'Свернуть' : 'Развернуть';
    }
}

