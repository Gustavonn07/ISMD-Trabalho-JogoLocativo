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
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);

    grid-area: 2 / 1 / 3 / -1;
`

export default GridPrincipal;