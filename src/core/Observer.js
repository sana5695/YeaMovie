export class Observer {
    constructor(initialState = null) {
        this.state = initialState;
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(){
        this.observers.forEach(observer => observer(this.state));
    }
    setState(newState) {
        this.state = newState;
        this.notify();
    }

    getState() {
        return this.state;
    }
}