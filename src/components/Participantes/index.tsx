import { styled } from "styled-components";

const Participantes = () => {
    return (
        <>
            <Participantes__Container>
                Participantes
            </Participantes__Container>
        </>
    )
}

const Participantes__Container = styled.section`
    background-color: yellow;
    grid-area: 3 / 2 / 4 / -1;
`

export default Participantes;