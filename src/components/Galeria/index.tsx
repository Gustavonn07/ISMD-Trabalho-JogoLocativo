import { styled } from "styled-components";

const Galeria = () => {

    return (
        <>
            <Galeria__Container>
                Galeria
            </Galeria__Container>
        </>
    )
}

const Galeria__Container = styled.section`
    background-color: blue;
    grid-area: 4 / 2 / -1 / -1;
`

export default Galeria;