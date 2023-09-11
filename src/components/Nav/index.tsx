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
    width: 16.5%;
    z-index: 100;
`

export default Nav;