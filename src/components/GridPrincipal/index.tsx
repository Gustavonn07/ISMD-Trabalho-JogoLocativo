import { styled } from 'styled-components';
import { ReactNode } from 'react';

type PropsGridPrincipal = {
    children: ReactNode
}

const GridPrincipal = ({children}: PropsGridPrincipal) => {

    return (
        <>
            <GridPrincipal__Container>
                {children}
            </GridPrincipal__Container>
        </>
    )
}

const GridPrincipal__Container = styled.main`
    display: grid;

    grid-area: 1 / 2 / 3 / -1;
`

export default GridPrincipal;