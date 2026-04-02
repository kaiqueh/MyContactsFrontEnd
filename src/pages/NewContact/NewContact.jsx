import PageHeader from "../../components/Pageheader/PageHeader"
import ContactForm from "../../components/ContactForm/ContactForm"
import ContactService from "../../services/ContactService"

export default function NewContact() {

    async function HandlerSubmit(dataform) {

        const contact = {
            name: dataform.Name,
            email: dataform.Email,
            phone: dataform.Phone,
            category_id: dataform.SocialMedia
        }
        const data = await ContactService.createContact(contact)
        console.log(contact)

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
