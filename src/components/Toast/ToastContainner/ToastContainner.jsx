import { useEffect, useState } from "react";
import { Container } from "./styled"
import { ToastMenssager } from "../ToastMenssager/ToastMensager";

export function ToastContainer({ children }) {

    const [mensage, setmensage] = useState([]);

    useEffect(() => {
        function removeToast(event) {
            const { mensage, type } = event.detail

            setmensage((prevState) => [
                ...prevState,
                { id: Math.random(), type, mensage }
            ])
        }

        document.addEventListener("addToast", removeToast)


        return () => {
            document.removeEventListener("addToast", removeToast)
        }
    }, []);
    }

    return (
        <Container>
            {mensage.map((mensagem) => (
                <ToastMenssager
                    type={mensagem.type}
                    key={mensagem.id}
                    mensage={mensagem.mensage} />
            ))}
        </Container>
    )


