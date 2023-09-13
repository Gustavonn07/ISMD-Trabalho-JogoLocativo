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
                        link="/comojogar"
                        nome="Como jogar"
                    />
                    <Btn
                        link="desafio"
                        nome="Desafios"
                    />
                    <Btn
                        link="/regras"
                        nome="Regras"
                    />
                    <Btn
                        link="controle"
                        nome="Verificação"
                    />
                    <Footer />
                </Nav>
                <Outlet />
                <Participantes
                    imagem1="../../images/Gustavo.jpg"
                    imagem2="../../images/Klaivert.jpg"
                    alt1="Imagem do Gustavo de boné na praia usando roupas pretas."
                    alt2="Imagem do Klaiver de fone de ouvido"
                    nome1="Gustavo Nepomuceno Nogueira"
                    nome2="José Klaivert Santos da Silva"
                    mat1=" 554728"
                    mat2=" 552806"
                />
                <Galeria />
            </Main>
        </>
    )
}

const Main = styled.main`
    display: grid;
    /* 5 linhas */
    grid-template-columns: 25rem repeat(3, 1fr);
    grid-template-rows: repeat(2, 48vh) 75vh 73.5vh;

    @media only screen and (max-width: 50rem) {
        grid-template-columns: 25rem repeat(2, 1fr);
        grid-template-rows: 55vh 40vh 75vh;
    }

    @media only screen and (max-width: 16.25rem) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 35vh 40vh;
    }
`

export default PageLayout;