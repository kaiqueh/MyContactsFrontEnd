import PageHeader from "../../components/Pageheader/PageHeader"
import ContactForm from "../../components/ContactForm/ContactForm"
import ContactService from "../../services/ContactService"
import { ToastMenssager } from "../../utils/Toast"

export default function NewContact() {

    async function HandlerSubmit(dataform) {
        try {
            const contact = {
                name: dataform.Name,
                email: dataform.Email,
                phone: dataform.Phone,
                category_id: dataform.SocialMedia
            }

            const data = await ContactService.createContact(contact)

            console.log(contact)

            ToastMenssager({ type: "success", mensage: "Contato criado com sucesso!" })
        } catch {
            ToastMenssager({ type: "error", mensage: "Erro ao criar contato" })
        }
    }

    return (
        <>
            <PageHeader title="Novo Contato" />
            <ContactForm
                LabelButton={"Cadastrar"}
                onsubmit={HandlerSubmit} />


        </>
    )

}
