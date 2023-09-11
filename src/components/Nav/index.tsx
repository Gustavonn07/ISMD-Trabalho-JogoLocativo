import { styled } from 'styled-components';

const Nav = () => {

    return (
        <>
            <Nav__Container>
                Nav
            </Nav__Container>
        </>
    )
}

const Nav__Container = styled.main`
    grid-area: 1 / 1 / -1 / 2;
    background-color: orange;
`

export default Nav;