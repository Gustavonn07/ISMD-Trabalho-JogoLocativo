import { styled } from "styled-components";

type PropsBtn = {
    link: string,
    nome: string
}

const Btn = ({ link, nome }: PropsBtn) => {

    return (
        <>
            <Btn__link href={link}>
                {nome}
            </Btn__link>
        </>
    )
}

const Btn__link = styled.a`
    width: 100%;
    padding: 2rem;
    padding-left: 25%;
    border-bottom: .35rem solid var(--color-secondary-dark-1);
    transition: all .2s;
    color: var(--color-white);
    letter-spacing: .1rem;

    &:hover,
    &:focus {
        transform: translateY(-3px);
    }

    &:active {
        transform: translateY(-1.5px);
    }
`

export default Btn;