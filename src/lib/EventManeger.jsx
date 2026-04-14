export default class EventManager {

    constructor() {
        this.listeners = new Map()
    }

    on(event, listener) {
        if (!this.listeners.has(event)) {
            this.listeners.set(event, [])
        }
        this.listeners.get(event).push(listener)
    }

    emit(event, payload) {
        if (!this.listeners.has(event)) {
            return
        }

        this.listeners.get(event).forEach((listener) => listener(payload))
    }

    removeListener(event, listener) {
        if (!this.listeners.has(event)) {
            return
        }

        const filtered = this.listeners.get(event).filter((l) => l !== listener)
        this.listeners.set(event, filtered)
    }
}

const toastEventManager = new EventManager()
