import ReactDom from "react-dom";
import { Overlay } from "./styled.jsx";
import Spinner from "../spinner/spinner.jsx";

export default function Loader({ isloading }) {

    if (!isloading) {
        return null
    }
    return ReactDom.createPortal(
        <Overlay>
            <Spinner/>
        </Overlay>,
        document.getElementById("loader-root")
    )
}
