import { Outlet } from "react-router-dom";
import Nav from '../../components/Nav';
import Participantes from "../../components/Participantes";
import Galeria from "../../components/Galeria";
import { styled } from "styled-components";

const PageLayout = () => {

    return (
        <>
            <Main>
                <Nav/>
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
    grid-template-columns: 40rem repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
`

export default PageLayout;