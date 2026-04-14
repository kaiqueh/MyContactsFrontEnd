import EventManager from "../lib/EventManeger"
export const toastEventManager = new EventManager();

export function ToastMenssager({ mensage, type }) {

    toastEventManager.emit("addToast", { mensage, type })
}
