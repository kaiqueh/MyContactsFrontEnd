import Spinner from "../spinner/spinner.jsx";
import {StyledButton} from "./styled.jsx";

export function Button({children, isloading, type = "button", disabled}) {
    return(
        <StyledButton type={type} disabled={isloading || disabled  }>
            {!isloading && children}
            {isloading && <Spinner size={16} />}
        </StyledButton>
    )
}
