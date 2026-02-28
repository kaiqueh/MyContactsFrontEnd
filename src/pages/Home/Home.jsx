import { Container, Header, ListContainer, Cardlist, InputSearchContainer }
    from "./styled.jsx";
import arrow from "../../assets/images/icons/arrow.svg";
import edit from "../../assets/images/icons/edit.svg"
import trash from "../../assets/images/icons/trash.svg"
import { Link } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { ListHeader } from "./styled.jsx";
import Loader from "../../components/Loader/Loader.jsx";
// import  ModalComponent  from "../../components/modal/modal.jsx";
// import Loader from "../../components/Loader/Loader.jsx";




export default function Home() {

    const [ContactForm, SetContact] = useState([])
    const [orderBy, SetOrderBy] = useState('ASC')
    const [serchTerm, SetSerchTerm] = useState('')
    const [IsLoading, SetIsLoading] = useState(true)

    const FilterdContact = useMemo(() => ContactForm.filter((contact) => (
            contact.name.toLowerCase().includes(serchTerm.toLowerCase())
        ))
    ,[serchTerm, ContactForm])

    useEffect(async () => {
        fetch(`http://localhost:3001/contacts?orderBy=${orderBy}`)
            .then(async (res) => {
                const resposta = await res.json()
                SetContact(resposta)
            }).catch((error) => {
                console.log(error)
            }).finally(() => {
                SetIsLoading(false)
            })

    }, [orderBy])

    function HandlerOrderBy() {
        SetOrderBy((prev) => prev === 'ASC' ? 'DESC' : 'ASC')
    }

    function HandleFilterName(event) {
        SetSerchTerm(event.target.value)
    }

    return (
        <Container>
            <Loader isloading={IsLoading}/>

            <InputSearchContainer>
                <input
                    type="text"
                    placeholder="Pesquisar contato..."
                    onChange={HandleFilterName}
                />
            </InputSearchContainer>

            <Header>
                <strong>{FilterdContact.length}
                    {FilterdContact.length > 1 ? ' Contatos' : ' contato'}
                </strong>
                <Link to="/new">Novo Contato</Link>
            </Header>

            <ListContainer>
                <ListHeader orderBy={orderBy}>
                    {FilterdContact.length > 0 && (
                        <button type="button" onClick={HandlerOrderBy}>
                            <span>Nome</span>
                            <a href="/">
                                <img src={arrow} alt="Arrow" />
                            </a>
                        </button>
                    )}
                </ListHeader>

                {FilterdContact.map((contact) => (
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
