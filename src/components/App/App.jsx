import CreateGlobalStyle from "../../assets/styles/Global.jsx";
import { ThemeProvider } from "styled-components";
import defaultTheme from "../../assets/styles/themes/default.jsx";
import Header from "../Header/Header.jsx";
import { Container } from "./styled.jsx";


function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CreateGlobalStyle />
            <Container>
                <Header />
            </Container>
        </ThemeProvider>
    );
}

export default App;
