import { useState, useEffect } from "react"
import isEmailValid from "../../utils/IsEmailValid"
import useError from "../../Hooks/UseError"
import formatPhone from "../../utils/FormatPhone"

import { Form } from "./styled"
import CategoryService from "../../services/CategoryService"

import FormGroup from "../FormGroup/formGroup"
import { Input } from "../Input/input"
import { Select } from "../Input/input"
import { Button } from "../Button/Button.jsx"
import Spinner from "../spinner/spinner"

export default function ContactForm({ LabelButton, onsubmit }) {

    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Phone, setPhone] = useState("");
    const [SocialMedia, setSocialMedia] = useState("instagram");
    const [category, setcategory] = useState([])
    const { GetErrorMenssagemByFildName, SetErrors, RemoveError, Error } = useError()
    const [isloadingCategory, setisloadingCategory] = useState(true)
    const [IsSubmitting, SetIsSubmitting] = useState(false)

    useEffect(() => {
        async function LoadCategories() {
            try{
            let data = await CategoryService.ListCategories();
            setcategory(data)
            }catch{}finally{
                setisloadingCategory(false)
            }
        }

        LoadCategories()
    }, [])

    const IsValidForm = Name && Error.length === 0

    async function handleSubmit(event) {
        event.preventDefault();

        SetIsSubmitting(true)

        await onsubmit({
            Name,
            Email,
            Phone,
            SocialMedia
        })

        SetIsSubmitting(false)

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
                    error={GetErrorMenssagemByFildName('Name')}
                    disabled={IsSubmitting} />
            </FormGroup>

            <FormGroup error={GetErrorMenssagemByFildName('Email')}>
                <Input
                    type="email"
                    placeholder="E-mail"
                    value={Email}
                    onChange={HandleChangeEmail}
                    error={GetErrorMenssagemByFildName('Email')}
                    disabled={IsSubmitting}/>
            </FormGroup>

            <FormGroup>
                <Input placeholder="Telefone"
                 value={Phone}
                 onChange={(event) => setPhone(formatPhone(event.target.value))}
                 disabled={IsSubmitting}
                 />
            </FormGroup>

            <FormGroup isloading={isloadingCategory}>
                <Select disabled={isloadingCategory} value={SocialMedia} onChange={(event) => setSocialMedia(event.target.value)}>
                    <option value="instagram">Sem Categoria</option>
                    {category.map((category) => (
                        <option key={category.id} value={category.id}> {category.name}</option>
                    ))}
                </Select>
            </FormGroup>

            <FormGroup>
                <Button
                type="onsubmit"
                isloading={IsSubmitting}
                disabled={!IsValidForm}>
                    {LabelButton}
                </Button>
            </FormGroup>

        </Form>
    )
}
