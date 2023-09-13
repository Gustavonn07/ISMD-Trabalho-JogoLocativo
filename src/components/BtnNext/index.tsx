import { styled } from "styled-components";

type PropsBtnNext = {
    link: string,
    texto: string
}

const BtnNext = ({ link, texto }: PropsBtnNext) => {

    return (
        <>
            <BtnNext__Btn href={link}>
                {texto}
            </BtnNext__Btn>
        </>
    )
}

const BtnNext__Btn = styled.a`
    padding: .8rem;
    font-size: 1.8rem;
    letter-spacing: .1rem;

    border-radius: .5rem;
    box-shadow: 0 1rem 1.8rem #00000030;
    background-color: inherit;
    color: inherit;

    @media only screen and (max-width: 62.5rem) { font-size: 2rem}
`

export default BtnNext;