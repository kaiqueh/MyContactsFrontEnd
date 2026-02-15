import CreateGlobalStyle from "../../assets/styles/Global.jsx";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../../assets/styles/themes/default.jsx";
import Header from "../Header/Header.jsx";
import { Container } from "./styled.jsx";
import Routes from "../../Routes.jsx";
import { BrowserRouter } from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={defaultTheme}>
                <CreateGlobalStyle />
                <Container>
                    <Header />
                    <Routes/>
                </Container>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
