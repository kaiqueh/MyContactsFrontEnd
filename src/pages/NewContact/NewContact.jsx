import PageHeader from "../../components/Pageheader/PageHeader"
import ContactForm from "../../components/ContactForm/ContactForm"

export default function NewContact() {
    return (
        <>
            <PageHeader title="Novo Contato" />
            <ContactForm
            LabelButton={"Cadastrar"}/>

        </>
    )
}
