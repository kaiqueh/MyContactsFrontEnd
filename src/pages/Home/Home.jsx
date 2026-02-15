import { Container, Header, ListContainer, Cardlist, InputSearchContainer }
from "./styled.jsx";
import arrow from "../../assets/images/icons/arrow.svg";
import edit from "../../assets/images/icons/edit.svg"
import trash from "../../assets/images/icons/trash.svg"
import { Link } from "react-router-dom";


export default function Home() {
    return (
        <Container>

            <InputSearchContainer>
                <input type="text" placeholder="Pesquisar contato..." />
            </InputSearchContainer>

            <Header>
                <strong>3 contatos</strong>
                <Link to="/new">Novo Contato</Link>
            </Header>

            <ListContainer>
                <header>
                    <button type="button">
                        <span>Nome</span>
                        <a href="/">
                            <img src={arrow} alt="Arrow" />
                        </a>
                    </button>
                </header>

                <Cardlist>
                    <div className="info">
                        <div className="contact-name">
                            <strong>Kaique Reis</strong>
                            <small>Instagram</small>
                        </div>
                        <span>kaiquefps555@hotmail.com</span>
                        <span>(11) 9999-9999</span>
                    </div>
                    <div className="actions">
                        <Link to="/edit/123">
                            <img src={edit} alt="edit" />
                        </Link>
                        <button type="button">
                            <img src={trash} alt="trash" />
                        </button>
                    </div>
                </Cardlist>

            </ListContainer>

        </Container>
    )
}
