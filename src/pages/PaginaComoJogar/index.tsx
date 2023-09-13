import GridPrincipal from "../../components/GridPrincipal";
import { styled } from "styled-components";
import BotaoNext from "../../components/BtnNext"

const PaginaComoJogar = () => {

    return (
        <>
            <GridPrincipal>
                <ComoJogar__Container>
                    <ComoJogar__ContainerBox>
                        <ComoJogar__Box>
                            <ComoJogar__Heading>O que é Zord Map?</ComoJogar__Heading>
                            <ComoJogar__Texto>
                                Zord Map é um jogo pervasivo com duração de 2 horas no máximo, que utiliza de localização em tempo real (como Pokémon Go) para determinar a posição dos jogadores no Campus do Pici. O jogo tem como objetivo apresentar os arredores do campus para os calouros de forma imersiva e divertida, além de fazer com que trabalhem em equipe e conheçam os seus colegas de sala durante o jogo.
                            </ComoJogar__Texto>
                        </ComoJogar__Box>
                        <ComoJogar__Box>
                            <ComoJogar__Heading>Como jogar Zord Map?</ComoJogar__Heading>
                            <ComoJogar__Texto>
                                Neste jogo os participantes devem formar equipes de 3 pessoas, que quando juntas formam seu Zord e esse deve partir em buscas dos “Pontos de Poder” espalhados em pontos importantes do Campus do Pici, cumprindo os desafios do jogo, os obtendo a partir da leitura de QR codes escondidos nesses locais, para que enfim possam derrotar o grande monstro Vraque, que reside no bloco do SMD antes do tempo limite chegar ao final.
                            </ComoJogar__Texto>
                        </ComoJogar__Box>
                    </ComoJogar__ContainerBox>

                    <BTN__Container>
                        <Btn>
                            <BotaoNext
                                link="/"
                                texto="Voltar para tela inicial"
                            />
                        </Btn>
                        
                        <Btn>
                            <BotaoNext
                                link="/desafio"
                                texto="Ir para desafios"
                            />
                        </Btn>
                    </BTN__Container>
                </ComoJogar__Container>
            </GridPrincipal>
        </>
    )
}

const ComoJogar__Container = styled.section`
    width: 100%;
    height: 100%;

    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10rem;
    overflow: hidden;
    background-color: var(--color-secondary-light-3);
    z-index: 100;

    &::after {
        content: "";
        position: absolute;
        width: 60rem;
        height: 60rem;
        border: 1.8rem solid var(--color-terciary);
        border-radius: 100%;
        bottom: -25%;
        right: -25%;
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
        top: -30%;
        left: -15%;
        z-index: -1;
        box-shadow:  0 0 3rem var(--color-terciary), inset 0 0 3rem var(--color-terciary);
    }
`

const ComoJogar__ContainerBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10rem;
    height: 100%;
`

const BTN__Container = styled.div`
    display: flex;
    gap: 5rem;

    position: absolute;
    bottom: 4.5rem;
    right: 36%;
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

const ComoJogar__Box = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5rem;
    z-index: 2;
    
    width: 30vw;
    height: 60%;
    box-shadow: 0 .8rem 1.2rem #00000040;
    padding: 1.5rem;
    border-radius: .4rem;
    background-color: var(--color-secondary-light-5);
`

const ComoJogar__Heading = styled.h2`
    font-size: 3.5rem;
    letter-spacing: .1rem;
    color: var(--color-secondary-dark-1);
    text-shadow: 0 .2rem .4rem #00000030;
`

const ComoJogar__Texto = styled.p`
    font-size: 1.9rem;
    color: var(--color-secondary);
`

export default PaginaComoJogar;