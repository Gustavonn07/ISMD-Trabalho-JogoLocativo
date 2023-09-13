import { ReactNode } from 'react';
import { styled } from 'styled-components';

type PropsNav = {
    children: ReactNode
}

const Nav = ({ children }: PropsNav) => {

    return (
        <>
            <Nav__Container>
                {children}
            </Nav__Container>
        </>
    )
}

const Nav__Container = styled.section`
    grid-area: 1 / 1 / 3 / 2;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    font-size: 2.4rem;
    background-color: var(--color-secondary);
    box-shadow: 0 .8rem 1.8rem #00000060;
    position: fixed;
    height: 100vh;
    width: 25rem;
    z-index: 100;

    @media only screen and (max-width: 75rem) {
        grid-area: 1 / 1 / 2 / -1;
        width: 100%;
        height: 10rem;
        z-index: 1000;

        flex-direction: row;
    }
`

export default Nav;