import { Overley, Container, Footer } from "./styled";
import { Button } from "../Input/Button";
import ReactDOM from "react-dom";


export default function ModalComponent({danger}) {
    return (
        ReactDOM.createPortal(
        <Overley>
            <Container danger={danger}>
                <h1>Tem certeza que quer deletar o user Kaique reis</h1>
                <p>Este é o conteúdo do modal.</p>

                <Footer>
                    <button type="button" className="CancelButton">Cancelar</button>
                    <Button danger type="button">Deletar</Button>
                </Footer>

            </Container>
        </Overley>
        , document.getElementById("modal-root")
        ))
}
