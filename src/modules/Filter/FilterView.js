import {BaseView} from "../Base/BaseView.js";
import {Select} from "../Select/Select.js";

export class FilterView extends BaseView {
    constructor(controller, observer, root) {
        super(controller, observer, root);


    }

    mount(){
        this.ganre = Select.create('Жанр',['1','2','3'],this.root.className);
        this.year = Select.create('Год',['1','2','3'],this.root.className);
        this.country = Select.create('Страна',['1','2','3'],this.root.className);
    }
}