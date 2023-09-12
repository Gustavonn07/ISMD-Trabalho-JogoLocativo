import GridPrincipal from "../../components/GridPrincipal";
import { styled } from "styled-components";
import BtnNext from "../../components/BtnNext";

const PaginaDesafio = () => {

    return (
        <>
            <GridPrincipal>
                <Container__Desafio>
                    <Container__Texto>
                        <Desafios__Heading> Desafios: </Desafios__Heading>
                        <Desafios__Paragraph>
                            No Zord Map as equipes possuem metas e desafios bem simples e claros: as diferentes equipes devem visitar os principais locais do Campus do Pici marcados no mapa, escanear os QR codes presentes em cada um deles (depois de uma pequena busca no local pelos mesmos), conseguir pontos e ao final do tempo de duas horas devem ter conseguido chegar ao bloco de SMD com pontos o suficiente para derrotar o chefão final, e para aqueles que conseguirem completar essas etapas será então decidida a equipe vencedora, que será aquela que tiver obtido mais pontos.
                                <br />
                                <br />
                            Em caso de empate na pontuação, a equipe vencedora será aquela que conseguiu chegar ao bloco do SMD no menor tempo.
                        </Desafios__Paragraph>
                    </Container__Texto>

                    <Container__Btn>
                        <Btn>
                            <BtnNext
                                link="/comojogar"
                                texto="Voltar para como jogar"
                            />
                        </Btn>
                        <Btn>
                            <BtnNext 
                                link="/regras"
                                texto="Ir para regras"
                            />
                        </Btn>
                    </Container__Btn>
                </Container__Desafio>
            </GridPrincipal>
        </>
    )
}

const Container__Desafio = styled.section`
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
        bottom: 10%;
        right: -10%;
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
        top: 50%;
        left: 2%;
        z-index: -1;
        box-shadow:  0 0 3rem var(--color-terciary), inset 0 0 3rem var(--color-terciary);
    }
`

const Container__Texto = styled.div`
    width: 80%;
    height: 60%;
    margin-top: 10rem;
    
    display: flex;
    flex-direction: column;
    gap: 5.5rem;

    padding: 2rem;
    border-radius: .5rem;
    background-color: var(--color-secondary-light-5);
`

const Container__Btn = styled.div`
    margin-top: 10rem;
    display: flex;
    gap: 5rem;
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

const Desafios__Heading = styled.h2`
    font-size: 3.5rem;
    letter-spacing: .1rem;
    color: var(--color-secondary-dark-1);
    text-shadow: 0 .2rem .4rem #00000030;
    margin-left: 3rem;
    margin-top: 3rem;
`

const Desafios__Paragraph = styled.p`
    font-size: 1.9rem;
    color: var(--color-secondary);
    align-self: center;
    width: 90%;
`

export default PaginaDesafio;