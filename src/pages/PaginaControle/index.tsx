import GridPrincipal from "../../components/GridPrincipal";
import { styled } from "styled-components";
import BtnNext from "../../components/BtnNext";

const PaginaControle = () => {

    return (
        <>
            <GridPrincipal>
                <Controle__Container>
                    <Container__Cima>
                        <Texto__Container>
                            <Texto__Heading>Como funciona a Verificação?</Texto__Heading>
                            <Texto__Paragraph>
                                Ao iniciar o jogo, o trio deve definir o ponto de partida para as pontuações dadas pelos locais a serem visitados sejam calculadas. O grupo poderá vizualizar o mapa disponivel no site (imagem ao lado), ou utilizar um mapa disponibilizado no começo do jogo para chegar nos locais indicados que darão as pontuações da equipe. Ao chegar em algum dos locais marcados, os participantes devem escanear um QR Code que pode ser encontrado no próprio lugar dermarcado. Depois de escaneado, as pontuações da equipe serão validadas.
                            </Texto__Paragraph>
                        </Texto__Container>

                        <Mapa>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7962.595424698981!2d-38.57240757511595!3d-3.7451885119847534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74bddc0b81247%3A0x3a9aaf2e40e9c9bb!2sCampus%20do%20Pici%20-%20Pici%2C%20Fortaleza%20-%20CE%2C%2060020-181!5e0!3m2!1spt-BR!2sbr!4v1694621265289!5m2!1spt-BR!2sbr" width="600" height="450" loading="lazy"></iframe>
                        </Mapa>
                    </Container__Cima>

                    <BTN__Container>
                        <Btn>
                            <BtnNext
                                link="/regras"
                                texto="Voltar para regras"
                            />
                        </Btn>
                        <Btn>
                            <BtnNext
                                link="/"
                                texto="Voltar para o inicio"
                            />
                        </Btn>
                    </BTN__Container>
                </Controle__Container>
            </GridPrincipal>
        </>
    )
}

const Controle__Container = styled.section`
    width: 100%;
    height: 100%;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-secondary-light-3);
    overflow: hidden;
    z-index: 100;

    &::after {
        content: "";
        position: absolute;
        width: 60rem;
        height: 60rem;
        border: 1.8rem solid var(--color-terciary);
        border-radius: 100%;
        bottom: -40%;
        right: 5%;
        z-index: -1;
        box-shadow:  0 0 3rem var(--color-terciary), inset 0 0 3rem var(--color-terciary);
    }

    &::before {
        content: "";
        position: absolute;
        width: 45rem;
        height: 45rem;
        border: 1.2rem solid var(--color-terciary);
        border-radius: 100%;
        top: 25%;
        left: -10%;
        z-index: -1;
        box-shadow:  0 0 3rem var(--color-terciary), inset 0 0 3rem var(--color-terciary);
    }
`

const Container__Cima = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-top: 10rem;


    @media only screen and (max-width: 50rem) {
        flex-direction: column;
    }
`

const Mapa = styled.div`
    width: 45%;
    height: 100%;
    box-shadow: 0 .8rem 1.4rem #00000040;
    margin-top: 7rem;
    
    & iframe {
        width: 100%;
        height: 100%;
        border-radius: .5rem;
        border: .4rem solid var(--color-terciary-dark-1);
    }

    @media only screen and (max-width: 50rem) {
        width: 80%;
        height: 50%;
    }
    
    @media only screen and (max-width: 16.25rem) {
        width: 98%;
    }
`

const Texto__Container = styled.div`
    width: 45%;
    height: 100%;
    margin-top: 7rem;
    
    display: flex;
    flex-direction: column;
    gap: 3.5rem;

    padding: 2rem;
    border-radius: .5rem;
    background-color: var(--color-secondary-light-5);

    @media only screen and (max-width: 50rem) {
        width: 80%;
        height: 46rem;
    }

    @media only screen and (max-width: 16.25rem) {
        width: 98%;
        height: 40rem;
        padding: 1rem;
    }
`

const BTN__Container = styled.div`
    position: absolute;
    bottom: 5rem;
    display: flex;
    gap: 5rem;

    @media only screen and (max-width: 62.5rem) {
        bottom: 10rem;
    }

    @media only screen and (max-width: 50rem) {
        bottom: 5rem;
    }
`

const Btn = styled.div`
    background-color: var(--color-secondary-light-2);
    color: var(--color-secondary-dark-1);
    cursor: pointer;
    transition: all .2s;

    &:hover,
    &:focus {
        transform: scale(1.04) translateY(-3px);
        background-color: var(--color-terciary-light-1);
    }

    &:active {
        transform: scale(1.02) translateY(-1.5px);
        background-color: var(--color-terciary);
    }
`

const Texto__Heading = styled.h2`
    font-size: 3.5rem;
    letter-spacing: .1rem;
    color: var(--color-secondary-dark-1);
    text-shadow: 0 .2rem .4rem #00000030;
    margin-left: 1rem;
    margin-top: 3rem;

    @media only screen and (max-width: 16.25rem) {
        margin-top: 2rem;
    }
`

const Texto__Paragraph = styled.p`
    font-size: 1.8rem;
    color: var(--color-secondary);
    align-self: center;
    width: 90%;
    
    @media only screen and (max-width: 62.5rem) {
        font-size: 2rem;   
    }
    
    @media only screen and (max-width: 16.25rem) {
        font-size: 2.2rem;
        width: 95%;
    }
`
export default PaginaControle;