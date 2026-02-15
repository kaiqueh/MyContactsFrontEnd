import PageHeader from "../../components/Pageheader/PageHeader"
import ContactForm from "../../components/ContactForm/ContactForm"

export default function EditContact() {
    return (
        <>
            <PageHeader title="Editar Contato" />
            <ContactForm
            LabelButton={"Salvar"}/>
        </>
    )
}
