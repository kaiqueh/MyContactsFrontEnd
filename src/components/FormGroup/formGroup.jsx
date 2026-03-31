import { Container } from "./styled.jsx";
import Spinner from "../spinner/spinner.jsx";
import Loader from "../Loader/Loader.jsx";

export default function FormGroup({ children, error, isloading }) {
    return (
        <Container>
            <Loader />
            <div className="form-itens">
                {children}
                {isloading && (
                    <div className="loader"> <Spinner size={16} /></div>
                )}
            </div>
            {error && <span>{error}</span>}
        </Container>
    )
}
