import GridPrincipal from "../../components/GridPrincipal";
import { styled } from "styled-components";
import BotaoNext from "../../components/BtnNext";

// type PropsPaginaInicial = {}

const PaginaInicial = () => {

    return (
        <>
            <GridPrincipal>
                <Banner>
                    <Banner__Heading> Zord Map </Banner__Heading>
                    <Btn__Container>
                        <BotaoNext
                            link="/comojogar"
                            texto="ir para Como jogar"
                        />
                    </Btn__Container>
                </Banner>
            </GridPrincipal>
        </>
    )
}

const Banner = styled.section`
    background-image: linear-gradient(60deg, #1d9c6bee 62%, #1280561e 50%),
                      url(../../images/Reitoria-UFC.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;

    @media only screen and (max-width: 50rem) {
        background-image: linear-gradient(80deg, #1d9c6bee 60%, #1280561e 60%),
                          url(../../images/Reitoria-UFC.jpg);
    }
`

const Banner__Heading = styled.h1`
    position: absolute;
    top: 35%;
    left: 10%;

    font-size: 8rem;
    color: var(--color-white);
    text-transform: uppercase;
    letter-spacing: .5rem;
    text-shadow: 0 1rem 1.8rem #00000030;
    display: flex;
    flex-direction: column-reverse;

    &::after {
        content: '';
        width: 100%;
        height: .5rem;
        background-color: var(--color-white);
        position: absolute;
        border-radius: .4rem;
        box-shadow: 0 1rem 1.8rem #00000030;
    }

    @media only screen and (max-width: 50rem) {
        font-size: 6rem;
        left: 5%;
        top: 45%;
    }

    @media only screen and (max-width: 16.25rem) {
        font-size: 4rem;
        top: 55%;
    }
`

const Btn__Container = styled.div`
    position: absolute;
    top: 80%;
    left: 22.5%;
    background-color: var(--color-secondary-light-3);
    color: var(--color-white);
    transition: all .2s;
    
    &:hover,
    &:focus {
        transform: scale(1.04) translateY(-3px);
        background-color: var(--color-secondary-light-4);
    }

    &:active {
        transform: scale(1.02) translateY(-1.5px);
        background-color: var(--color-secondary);
    }
`

export default PaginaInicial;