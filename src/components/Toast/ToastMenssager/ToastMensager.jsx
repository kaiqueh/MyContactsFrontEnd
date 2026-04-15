import { Containner } from "./styled"
import xcircleIcon from "../../../assets/images/icons/check-circle.svg"
import checkIcon from "../../../assets/images/icons/x-circle.svg"

export function ToastMenssager({mensage, type, OnremoveToast, id }) {
    function removeToast (){
       OnremoveToast(id)
    }

    return (
        <Containner type={type} onClick={removeToast}>
            {type === "success" && <img src={xcircleIcon} alt="Icone de sucesso"/>}
            {type === "error" && <img src={checkIcon} alt="Icone de erro"/>}
            <strong>{mensage}</strong>
        </Containner>

    )
}
