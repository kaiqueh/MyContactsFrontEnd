import PageHeader from "../../components/Pageheader/PageHeader"
import ContactForm from "../../components/ContactForm/ContactForm"
import ContactService from "../../services/ContactService"
import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom"
import { useEffect, useState } from "react"
import Loader from "../../components/Loader/Loader"
import { ToastMenssager } from "../../utils/Toast"


export default function EditContact() {
    const { id } = useParams()
    const [Isloadings, SetIsloadings] = useState(true)
    const history = useHistory()

    useEffect(() => {
        async function loadcontact() {
            try {
                const contact = await ContactService.getcontactbyID(id)
                SetIsloadings(false)

            } catch {
                history.push('/')
                ToastMenssager({ type: "error", mensage: "Contato não encontrado!" })
             }
        }
        loadcontact()
    }, [])


    return (
        <>
            <Loader isloading={Isloadings} />
            <PageHeader title="Editar Contato" />
            <ContactForm LabelButton={"Salvar"} />
        </>
    )
}
