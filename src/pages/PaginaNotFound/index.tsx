import { styled } from "styled-components";
import BotaoNext from "../../components/BtnNext"

const PaginaNotFound = () => {

    return (
        <>
            <Container__404>
                <Text__404>Opa parece que ocorreu um erro,<br /> desculpe o incomodo!</Text__404>
                <Btn>
                    <BotaoNext
                        link="/"
                        texto="Voltar para a tela inicial"
                    />
                </Btn>
            </Container__404>
        </>
    )
}

const Container__404 = styled.section`
    width: 100%;
    height: 100vh;
    background-color: var(--color-secondary);
    
    position: relative;
    overflow: hidden;

    &::after {
        content: "";
        position: absolute;
        width: 60rem;
        height: 60rem;
        border: 1.8rem solid var(--color-terciary);
        border-radius: 100%;
        bottom: 30%;
        right: 5%;
        z-index: 1;
        box-shadow:  0 0 3rem var(--color-terciary), inset 0 0 3rem var(--color-terciary);
    }

    &::before {
        content: "";
        position: absolute;
        width: 45rem;
        height: 45rem;
        border: 1.2rem solid var(--color-terciary);
        border-radius: 100%;
        top: 45%;
        left: -8%;
        z-index: 1;
        box-shadow:  0 0 3rem var(--color-terciary), inset 0 0 3rem var(--color-terciary);
    }
`

const Text__404 = styled.h2`
    color: var(--color-terciary);
    font-size: 4.5rem;
    text-align: center;
    padding: 2rem;
    border-radius: .4rem;
    box-shadow: 0 1rem 1.6rem #00000060;
    background-color: var(--color-secondary-light-3);
    z-index: 2;

    position: absolute;
    right: 50%;
    top: 30%;
    transform: translateX(50%);
`

const Btn = styled.div`
    background-color: var(--color-secondary-light-2);
    color: var(--color-secondary-dark-1);
    cursor: pointer;
    transition: all .2s;
    position: absolute;
    top: 80%;
    right: 50%;
    transform: translateX(50%);
    z-index: 2;

    &:hover,
    &:focus {
        transform: scale(1.04) translateX(50%) translateY(-3px);
        background-color: var(--color-terciary-light-1);
    }

    &:active {
        transform: scale(1.02) translateX(50%) translateY(-1.5px);
        background-color: var(--color-terciary);
    }
`

export default PaginaNotFound;