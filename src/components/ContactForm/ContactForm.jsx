import { useState } from "react"
import isEmailValid from "../../utils/IsEmailValid"

import { Form } from "./styled"

import FormGroup from "../FormGroup/formGroup"
import { Input } from "../Input/input"
import { Select } from "../Input/input"
import { Button } from "../Input/Button"

export default function ContactForm({ LabelButton }) {

    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Phone, setPhone] = useState("");
    const [SocialMedia, setSocialMedia] = useState("instagram");
    const [Error, setError] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        console.log({
            Name,
            Email,
            Phone,
            SocialMedia
        })
    }

    function HandleChangeName(event) {
        setName(event.target.value);
        if(!event.target.value) {
            setError((prev) => [
                ...prev,
                {
                    field: "Name",
                    message: "O nome é obrigatório"
                }
            ])
        } else {
            setName(event.target.value);
            setError((prev) => prev.filter(error => error.field !== "Name"));
        }
    }


    function HandleChangeEmail(event) {
        setEmail(event.target.value);
        if(!isEmailValid(event.target.value) && event.target.value) {

        const ErrorAlreadyExists = Error.find((error) => error.field === "Email")

        if(ErrorAlreadyExists){
            return;
        }

        if(event.target.value )
            setError((prev) => [
                ...prev,
                {
                    field: "Email",
                    message: "O e-mail é inválido"
                }
            ])
        } else {
            setError((prev) => prev.filter(error => error.field !== "Email"));
        }



    }

    console.log(Error)
    return (

        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Input placeholder="Nome" value={Name} onChange={HandleChangeName} />
            </FormGroup>

            <FormGroup>
                <Input placeholder="E-mail" value={Email} onChange={HandleChangeEmail} />
            </FormGroup>

            <FormGroup>
                <Input placeholder="Telefone" value={Phone} onChange={(event) => setPhone(event.target.value)} />
            </FormGroup>

            <FormGroup>
                <Select value={SocialMedia} onChange={(event) => setSocialMedia(event.target.value)}>
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
