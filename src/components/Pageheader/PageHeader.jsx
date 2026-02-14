import arrow from "../../assets/images/icons/arrow.svg";
import { Container } from "./styled.jsx";
import { Link } from "react-router-dom/cjs/react-router-dom.js";

export default function PageHeader({title}) {
    return (
        <Container>
            <Link to="/">
                <img src={arrow} alt="Voltar" />
                <span>Voltar</span>
            </Link>
            <h1>{title}</h1>
        </Container>
    )
}
