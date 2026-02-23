import { useState } from "react";

export default function useError() {

    const [Error, setError] = useState([]);

    function SetErrors({ field, message }) {

        const ErrorAlreadyExists = Error.find((error) => error.field === field)

        if(ErrorAlreadyExists){
            return;
        }

        setError((prev) => [
            ...prev,
            {
                field,
                message
            }
        ])
    }

    function RemoveError(FieldName){
        setError((prev) => prev.filter(error => error.field !== FieldName));
    }


    function GetErrorMenssagemByFildName(FildName){
        return Error.find((error) => error.field === FildName)?.message
    }

    return {SetErrors, RemoveError, GetErrorMenssagemByFildName, Error }
}
