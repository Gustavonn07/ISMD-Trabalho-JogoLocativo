import { styled } from "styled-components";

type PropsParticipantes = {
    imagem1: string,
    imagem2: string,
    alt1: string,
    alt2: string,
    nome1: string,
    nome2:string,
    mat1:string,
    mat2:string
}

const Participantes = ({ imagem1, imagem2, alt1, alt2, nome1, nome2, mat1, mat2 }: PropsParticipantes) => {
    return (
        <>
            <Participantes__Container>
                <Participantes__HeadingPrimary>Participantes:</Participantes__HeadingPrimary>
                <Participante__Container>
                    <Participantes__Participante>
                        <Participantes__Imagem src={imagem1} alt={alt1} />
                        <Participantes__Heading>{nome1}</Participantes__Heading>
                        <Participantes__HeadingSecondary>
                            <Participantes__Span>Matricula:</Participantes__Span>{mat1}
                        </Participantes__HeadingSecondary>
                    
                    </Participantes__Participante>
                    <Participantes__Participante>
                        <Participantes__Imagem src={imagem2} alt={alt2} />
                        <Participantes__Heading>{nome2}</Participantes__Heading>
                        <Participantes__HeadingSecondary>
                            <Participantes__Span>Matricula:</Participantes__Span>{mat2}
                        </Participantes__HeadingSecondary>
                    </Participantes__Participante>
                </Participante__Container>
            </Participantes__Container>
        </>
    )
}

const Participantes__Container = styled.section`
    grid-area: 3 / 2 / 4 / -1;
    background-color: var(--color-white);

    @media only screen and (max-width: 75rem) { grid-area: 3 / 1 / 4 / -1}
`

const Participantes__HeadingPrimary = styled.h2`
    font-size: 4rem;
    text-align: center;
    color: var(--color-secondary-dark-1);
    padding-top: 1rem;
    text-shadow: 0 .5rem .8rem #00000030;
    
    @media only screen and (max-width: 50rem) {
        padding-top: 3.5rem;
    }
`

const Participante__Container = styled.div`
    width: 100%;
    height: 60vh;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10rem;
    margin-top: -1rem;
    
    @media only screen and (max-width: 50rem) {
        flex-direction: column;
        gap: 3rem;
        margin-top: 2.5rem;
    }
`

const Participantes__Participante = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    
    width: 35%;
    height: 80%;
    color: var(--color-secondary-dark-1);
    background-color: var(--color-secondary-light-2);
    box-shadow: 0 .2rem .4rem #00000030;
    border-radius: 2rem;

    @media only screen and (max-width: 50rem) {
        width: 80%;
        height: 50%;
        gap: .5rem;
    }
`

const Participantes__Imagem = styled.img`
    width: 20rem;
    height: 20rem;
    border-radius: 100%;
    border: .4rem solid var(--color-secondary-dark-1);
    margin-bottom: 3rem;
    box-shadow: 0 .8rem 1rem #00000040;

    @media only screen and (max-width: 50rem) {
        margin-bottom: 1rem;
    }
`

const Participantes__Heading = styled.h3`
    font-size: 2rem;
    letter-spacing: .08rem;
    
    @media only screen and (max-width: 16.25rem) {
        font-size: 2%.5;
    }
`

const Participantes__HeadingSecondary = styled.h4`
    font-size: 1.6rem;
    letter-spacing: .12rem;
    
    @media only screen and (max-width: 16.25rem) {
        font-size: 2rem;
    }
`

const Participantes__Span = styled.span`
    letter-spacing: normal;
    font-size: 1.8rem;
    color: var(--color-secondary);

    @media only screen and (max-width: 16.25rem) {
        font-size: 2.2rem;
    }
`

export default Participantes;