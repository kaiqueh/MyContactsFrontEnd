import { useState } from "react"
import isEmailValid from "../../utils/IsEmailValid"
import useError from "../../Hooks/UseError"

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
    const { GetErrorMenssagemByFildName, SetErrors, RemoveError } = useError()

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
        if (!event.target.value) {
            SetErrors({
                field: "Name",
                message: "O nome é obrigatório"
            })
        } else {
            setName(event.target.value);
            RemoveError('Name')
        }
    }


    function HandleChangeEmail(event) {
        setEmail(event.target.value);
        if (!isEmailValid(event.target.value) && event.target.value) {

            SetErrors({
                field: "Email",
                message: "O e-mail é inválido"
            })
        } else {
            RemoveError('Email')
        }



    }

    return (

        <Form onSubmit={handleSubmit}>
            <FormGroup error={GetErrorMenssagemByFildName('Name')}>
                <Input
                    placeholder="Nome"
                    value={Name}
                    onChange={HandleChangeName}
                    error={GetErrorMenssagemByFildName('Name')} />
            </FormGroup>

            <FormGroup error={GetErrorMenssagemByFildName('Email')}>
                <Input
                    placeholder="E-mail"
                    value={Email}
                    onChange={HandleChangeEmail}
                    error={GetErrorMenssagemByFildName('Email')} />
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
