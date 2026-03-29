import { useState, useEffect } from "react"
import isEmailValid from "../../utils/IsEmailValid"
import useError from "../../Hooks/UseError"
import formatPhone from "../../utils/FormatPhone"

import { Form } from "./styled"
import CategoryService from "../../services/CategoryService"

import FormGroup from "../FormGroup/formGroup"
import { Input } from "../Input/input"
import { Select } from "../Input/input"
import { Button } from "../Input/Button"

export default function ContactForm({ LabelButton }) {

    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Phone, setPhone] = useState("");
    const [SocialMedia, setSocialMedia] = useState("instagram");
    const [category, setcategory] = useState([])
    const { GetErrorMenssagemByFildName, SetErrors, RemoveError, Error } = useError()

    useEffect( () => {
        async function LoadCategories(){
            let data = await CategoryService.ListCategories();
            setcategory(data)

        }

        LoadCategories()
    }, [])

    const IsValidForm = Name && Error.length === 0

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
                    type="email"
                    placeholder="E-mail"
                    value={Email}
                    onChange={HandleChangeEmail}
                    error={GetErrorMenssagemByFildName('Email')} />
            </FormGroup>

            <FormGroup>
                <Input placeholder="Telefone" value={Phone} onChange={(event) => setPhone(formatPhone(event.target.value))} />
            </FormGroup>

            <FormGroup>
                <Select value={SocialMedia} onChange={(event) => setSocialMedia(event.target.value)}>
                    <option value="instagram">Sem Categoria</option>
                    {category.map((category) => (
                        <option key={category.id} value={category.id}> {category.name}</option>
                    ))}
                </Select>
            </FormGroup>

            <FormGroup>
                <Button type="submit" disabled={!IsValidForm}>{LabelButton}</Button>
            </FormGroup>

        </Form>
    )
}
