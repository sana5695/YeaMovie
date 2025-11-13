 class Observer {
    constructor() {
        if (Observer.instance){
            return Observer.instance
        }
        this.observers = {};
        this.state = {};
        Observer.instance = this;
    }

    subscribe(event, callback) {
        if (!this.observers[event]) this.observers[event] = [];
        this.observers[event].push(callback);
    }

    unsubscribe(event, callback) {
        if (!this.observers[event]) return;
        this.observers[event] = this.observers[event].filter(fn => fn !== callback);
    }

    notify(event, data) {
        this.state[event] = data;
        if (!this.observers[event]) return;
        this.observers[event].forEach(callback => callback(data));
    }

     getState(event) {
         if (event) return this.state[event];
         return this.state;
     }
}

const observer = new Observer();
export default observer;