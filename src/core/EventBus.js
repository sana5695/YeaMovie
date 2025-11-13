class EventBus {
    constructor() {
        if (EventBus.instance) {
            return EventBus.instance;
        }
        this.events = {};
        EventBus.instance = this;
    }

    // Метод для подписки
    subscribe(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
        // Возвращаем функцию для отписки
        return () => {
            this.events[eventName] = this.events[eventName].filter(cb => cb !== callback);
        };
    }

    // Метод для публикации
    publish(eventName, data) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(callback => {
                callback(data);
            });
        }
    }
}

// Экспортируем единственный экземпляр класса (Singleton pattern)
const eventBusInstance = new EventBus();
export default eventBusInstance;
