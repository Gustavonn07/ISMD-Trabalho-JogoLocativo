import { Outlet } from "react-router-dom";
import Nav from '../../components/Nav';
import Participantes from "../../components/Participantes";
import Galeria from "../../components/Galeria";
import { styled } from "styled-components";
import Footer from "../../components/Footer";
import Btn from "../../components/Btn";

const PageLayout = () => {

    return (
        <>
            <Main>
                <Nav>
                    <Btn
                        link="/"
                        nome="Inicio"
                    />
                    <Btn
                        link="/regras"
                        nome="Regras"
                    />
                    <Btn
                        link="desafio"
                        nome="Desafios"
                    />
                    <Btn
                        link="controle"
                        nome="Verificação"
                    />
                    <Footer />
                </Nav>
                <Outlet />
                <Participantes />
                <Galeria />
            </Main>
        </>
    )
}

const Main = styled.main`
    display: grid;
    /* 5 linhas */
    grid-template-columns: 25rem repeat(3, 1fr);
    grid-template-rows: repeat(4, 80vh);
`

export default PageLayout;