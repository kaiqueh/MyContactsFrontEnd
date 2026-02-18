import  { Container } from "./styled.jsx";

export default function FormGroup({ children, error }) {
    return (
        <Container>
            {children}
            {error && <span>{error}</span>}
        </Container>
    )
}
