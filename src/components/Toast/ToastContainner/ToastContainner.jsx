import { useEffect, useState } from "react";
import { Container } from "./styled"
import { ToastMenssager } from "../ToastMenssager/ToastMensager";
import { toastEventManager } from "../../../utils/Toast";

export function ToastContainer({ children }) {

    const [mensage, setmensage] = useState([]);

    useEffect(() => {
        function removeToast({ type, mensage }) {
            setmensage((prevState) => [
                ...prevState,
                { id: Math.random(), type, mensage }
            ])
        }

        toastEventManager.on("addToast", removeToast)

        return () => {
            toastEventManager.removeListener("addToast", removeToast)
        }
    }, []);


    function RemoveToast(id) {
        setmensage((prevState) => prevState.filter((mensage) => mensage.id !== id ))
    }

    return (
        <Container>
            {mensage.map((mensagem) => (
                <ToastMenssager
                    type={mensagem.type}
                    key={mensagem.id}
                    mensage={mensagem.mensage}
                    OnremoveToast={RemoveToast}
                    id={mensagem.id}
                    />

            ))}
        </Container>
    )
}

