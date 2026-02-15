import { Form } from "./styled"
import FormGroup from "../FormGroup/formGroup"
import { Input } from "../Input/input"
import { Select } from "../Input/input"
import { Button } from "../Input/Button"

export default function ContactForm({ LabelButton }) {
    return (
        <Form>
            <FormGroup>
                <Input placeholder="Nome" />
            </FormGroup>

            <FormGroup>
                <Input placeholder="E-mail" />
            </FormGroup>

            <FormGroup>
                <Input placeholder="Telefone" />
            </FormGroup>

            <FormGroup>
                <Select>
                    <option value="instagram">Instagram</option>
                    <option value="facebook">Facebook</option>
                    <option value="linkedin">Linkedin</option>
                    <option value="twitter">Twitter</option>
                </Select>
            </FormGroup>

            <FormGroup>
                <Button type="submit">{LabelButton}</Button>
            </FormGroup>

        </Form>
    )
}
