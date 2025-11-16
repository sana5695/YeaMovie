class Store {
    constructor() {
        if (Store.instance){
            return Store.instance
        }
        this.store = new Map;
        Store.instance = this;
    }

    set(key, value) {
        this.store.set(key, value);
    }

    get(key) {
        return this.store.get(key);
    }

    has(key) {
        return this.store.has(key);
    }

    find(data) {
        const searchId = Number(data);

        for (const [, items] of this.store) {
            const found = items.find(item => item.id === searchId);
            if (found) return found;
        }
        return null;
    }

}

const store = new Store();
export default store;