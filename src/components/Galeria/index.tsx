import { styled } from "styled-components";

const Galeria = () => {

    return (
        <>
            <Galeria__Container>
                <Galeria__Image1 src="../../images/ICA.jpg" alt="Imagem da entrada do ICA"></Galeria__Image1>
                <Galeria__Image2 src="../../images/IEFES.jpg" alt="Imagem da entrada do FIES"></Galeria__Image2>
                <Galeria__Image3 src="../../images/RU-Antigo.jpg" alt="Imagem da entrada do RU antigo"></Galeria__Image3>
                <Galeria__Image4 src="../../images/passagem01.jpg" alt="Uma passagem no campus do pici com varias arvores"></Galeria__Image4>  
                <Galeria__Image5 src="../../images/SMD.jpg" alt="Imagem do bloco do SMD"></Galeria__Image5>  
                <Galeria__Image6 src="../../images/RU-Novo.jpg" alt="Imagem do RU novo"></Galeria__Image6>  
                <Galeria__Image7 src="../../images/passagem02.jpg" alt="Uma passagem no campus do pici com varias arvores"></Galeria__Image7>  
            </Galeria__Container>
        </>
    )
}

const Galeria__Container = styled.section`
    grid-area: 4 / 2 / -1 / -1;
    gap: .5rem;
    padding: .5rem;
    background-color: var(--color-white);
    /* background-color: var(--color-terciary-dark-1); */
    height: 100%;
    
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(5, 1fr);

    
    @media only screen and (max-width: 75rem) { grid-area: 4 / 1 / -1 / -1}
`
const Galeria__Image1 = styled.img`
    grid-area: 1 / 1 / 3 / 3;
    box-shadow: 0 .5rem .8rem #00000040;
    width: 100%;
    height: 100%;
`

const Galeria__Image2 = styled.img`
    grid-area: 3 / 1 / 4 / 2;
    height: 16.6rem;
    box-shadow: 0 .5rem .8rem #00000040;
    width: 100%;
    height: 100%;
`

const Galeria__Image3 = styled.img`
    grid-area: 1 / 3 / 2 / 4;
    box-shadow: 0 .5rem .8rem #00000040;
    width: 100%;
    height: 100%;
`

const Galeria__Image4 = styled.img`
    grid-area: 3 / 2 / 4 / 3;
    box-shadow: 0 .5rem .8rem #00000040;
    width: 100%;
    height: 100%;
`
    
const Galeria__Image5 = styled.img`
    grid-area: 2 / 3 / 4 / 4;
    box-shadow: 0 .5rem .8rem #00000040;
    width: 100%;
    height: 100%;
`

const Galeria__Image6 = styled.img`
    grid-area: 1 / 4 / 2 / -1;
    box-shadow: 0 .5rem .8rem #00000040;
    width: 100%;
    height: 100%;
`

const Galeria__Image7 = styled.img`
    grid-area: 2 / 4 / 4 / -1;
    box-shadow: 0 .5rem .8rem #00000040;
    width: 100%;
    height: 100%;
`

export default Galeria;