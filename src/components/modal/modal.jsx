import { Overley, Container, Footer } from "./styled";
import { Button } from "../Input/Button";

export default function ModalComponent() {
    return (
        <Overley>
            <Container>
                <h1>Tem certeza que quer deletar o user Kaique reis</h1>
                <p>Este é o conteúdo do modal.</p>

                <Footer>
                    <button type="button" className="CancelButton">Cancelar</button>
                    <Button type="button">Deletar</Button>
                </Footer>

            </Container>
        </Overley>
        )
}
