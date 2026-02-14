// import { Container } from "./styled.jsx";
import logo from "../../assets/images/logo.svg";
import { Container } from "./styled";


export default function Header() {
    return (
        <Container>
            <img src={logo} alt="Mycontacts" />
        </Container>


    );
}
