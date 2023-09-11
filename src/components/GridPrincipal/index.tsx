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
                Grid
            </GridPrincipal__Container>
        </>
    )
}

const GridPrincipal__Container = styled.main`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);

    grid-area: 1 / 2 / 3 / -1;
    background-color: red;
`

export default GridPrincipal;