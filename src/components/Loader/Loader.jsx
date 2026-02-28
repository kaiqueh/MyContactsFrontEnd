import ReactDom from "react-dom";
import { Overlay } from "./styled.jsx";

export default function Loader({ isloading }) {

    if (!isloading) {
        return null
    }
    return ReactDom.createPortal(
        <Overlay>
            <div className="loader"></div>
        </Overlay>,
        document.getElementById("loader-root")
    )
}
