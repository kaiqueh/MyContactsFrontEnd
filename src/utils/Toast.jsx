export function ToastMenssager({ mensage, type }) {
     const toast = new CustomEvent("addToast", {
        detail: {
            mensage: mensage,
            type: type
        },
    })

    document.dispatchEvent(toast)
}
