import GridPrincipal from "../../components/GridPrincipal";
import { styled } from "styled-components";
import BotaoNext from "../../components/BtnNext"

const PaginaRegras = () => {

    return (
        <>
            <GridPrincipal>
                <Regras__Container>
                    <Texto__Container>
                        <Texto__Heading></Texto__Heading>
                        <Texto__Paragraph>
                            
                        </Texto__Paragraph>
                    </Texto__Container>

                    <BTN__Container>
                        <Btn>
                            <BotaoNext
                                link=""
                                texto=""
                            />
                        </Btn>
                        <Btn>
                            <BotaoNext
                                link=""
                                texto=""
                            />
                        </Btn>
                    </BTN__Container>
                </Regras__Container>
            </GridPrincipal>
        </>
    )
}

const Regras__Container = styled.section`
    
`

const Texto__Container = styled.div`
    
`

const Texto__Heading = styled.h2`
    
`

const Texto__Paragraph = styled.p`
    
`

const BTN__Container = styled.div`
    
`

const Btn = styled.div`
    
`

export default PaginaRegras;