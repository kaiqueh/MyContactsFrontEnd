import { Input, Select } from "../../components/Input/input.jsx"
import PageHeader from "../../components/Pageheader/PageHeader"
import {Button} from "../../components/Input/Button.jsx"


export default function NewContact() {
    return (
        <>
            <PageHeader title="Novo Contato" />
            <Input type="text" placeholder="Nome" />
            <Select >
                <option value="email">Email</option>
                <option value="phone">Telefone</option>
            </Select>

            <Button type="button">Cadastro</Button>
            <Button type="button" disabled>Cadastro</Button>
        </>
    )
}
