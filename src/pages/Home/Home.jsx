import { Container, Header, ListContainer, Cardlist, InputSearchContainer, ContainerErrror }
    from "./styled.jsx";
import arrow from "../../assets/images/icons/arrow.svg";
import edit from "../../assets/images/icons/edit.svg"
import trash from "../../assets/images/icons/trash.svg"
import IconError from "../../assets/images/icons/IconError.svg"
import { Link } from "react-router-dom";
import { useEffect, useState, useMemo, useCallback } from "react";
import { ListHeader } from "./styled.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import ContactService from "../../services/ContactService.jsx";
import { Button } from "../../components/Input/Button.jsx";


// import  ModalComponent  from "../../components/modal/modal.jsx";
// import Loader from "../../components/Loader/Loader.jsx";


export default function Home() {

    const [ContactForm, SetContact] = useState([])
    const [orderBy, SetOrderBy] = useState('ASC')
    const [serchTerm, SetSerchTerm] = useState('')
    const [IsLoading, SetIsLoading] = useState(true)
    const [hasError, SetHasError] = useState(false)

    const FilterdContact = useMemo(() => ContactForm.filter((contact) => (
        contact.name.toLowerCase().includes(serchTerm.toLowerCase())
    ))
        , [serchTerm, ContactForm])

    const LoadContact = useCallback(async () => {
        try {
            SetIsLoading(true)
            const json = await ContactService.ListContact(orderBy)
            SetHasError(false)
            SetContact(json)
        } catch (error) {
            console.log(error)
            SetHasError(true)
        } finally {
            SetIsLoading(false)
        }
    }, [orderBy])


    useEffect(() => {
        LoadContact()
    }, [orderBy])

    function HandlerOrderBy() {
        SetOrderBy((prev) => prev === 'ASC' ? 'DESC' : 'ASC')
    }

    function HandleFilterName(event) {
        SetSerchTerm(event.target.value)
    }

    function HandlerTryAgain() {
        LoadContact()
    }

    return (
        <Container>
            <Loader isloading={IsLoading} />

            <InputSearchContainer>
                <input
                    type="text"
                    placeholder="Pesquisar contato..."
                    onChange={HandleFilterName}
                />
            </InputSearchContainer>

            <Header $hasError={hasError}>
                {!hasError === true && (
                    <strong>{FilterdContact.length}
                        {FilterdContact.length > 1 ? ' Contatos' : ' contato'}
                    </strong>
                )}
                <Link to="/new">Novo Contato</Link>
            </Header>

            {hasError === true && (
                <ContainerErrror>
                    <img src={IconError} alt="Icone de Erro" />
                    <div className="mensagemError">
                        <span>
                            Ocorreu um erro ao obter os seus Contatos!
                        </span>
                        <Button type="button" onClick={HandlerTryAgain}>tentar novamente</Button>
                    </div>
                </ContainerErrror>
            )}


            <ListContainer>
                <ListHeader $orderBy={orderBy}>
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
