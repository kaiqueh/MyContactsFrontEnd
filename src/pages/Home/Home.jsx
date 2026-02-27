import { Container, Header, ListContainer, Cardlist, InputSearchContainer }
    from "./styled.jsx";
import arrow from "../../assets/images/icons/arrow.svg";
import edit from "../../assets/images/icons/edit.svg"
import trash from "../../assets/images/icons/trash.svg"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// import  ModalComponent  from "../../components/modal/modal.jsx";
// import Loader from "../../components/Loader/Loader.jsx";




export default function Home() {

    const [ContactForm, SetContact] = useState([])
    const [orderBy, SetOrderBy] = useState('ASC')

    useEffect(async() => {
        fetch(`http://localhost:3001/contacts?orderBy=${orderBy}`)
            .then(async (res) => {
                const resposta = await res.json()
                SetContact(resposta)
                // SetContact([])

            }).catch((error) => {
                console.log(error)
            })

    },[orderBy])

    function HandlerOrderBy(){
        SetOrderBy((prev) => prev === 'ASC' ? 'DESC' : 'ASC')
        // console.log(orderBy)
    }


    return (
        <Container>

            <InputSearchContainer>
                <input type="text" placeholder="Pesquisar contato..." />
            </InputSearchContainer>

            <Header>
                <strong>{ContactForm.length}
                {ContactForm.length > 1 ? ' Contatos' : ' contato'}
                </strong>
                <Link to="/new">Novo Contato</Link>
            </Header>

            <ListContainer orderBy={orderBy} >
                <header>
                    <button type="button" onClick={HandlerOrderBy}>
                        <span>Nome</span>
                        <a href="/">
                            <img src={arrow} alt="Arrow" />
                        </a>
                    </button>
                </header>

                {ContactForm.map((contact) => (
                    <Cardlist key={contact.id}>
                    <div className="info">
                        <div className="contact-name">
                            <strong>{contact.name}</strong>
                            <small>{contact.category_name}</small>
                        </div>
                        <span>{contact.email}</span>
                        <span>{contact.phone}</span>
                    </div>
                    <div className="actions">
                        <Link to={`/edit/${contact.id}`}>
                            <img src={edit} alt="edit" />
                        </Link>
                        <button type="button">
                            <img src={trash} alt="trash" />
                        </button>
                    </div>
                </Cardlist>
                ))}


            </ListContainer>

        </Container>

    )

}
