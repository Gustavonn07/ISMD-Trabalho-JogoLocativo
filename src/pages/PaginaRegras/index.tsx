import GridPrincipal from "../../components/GridPrincipal";
import { styled } from "styled-components";
import BotaoNext from "../../components/BtnNext"

const PaginaRegras = () => {

    return (
        <>
            <GridPrincipal>
                <Regras__Container>
                    <Texto__Container>
                        <Texto__Heading>Regras:</Texto__Heading>
                        <Texto__Paragraph>
                            1. Os participantes devem iniciar em uma das três entradas: Mister Hull, Humberto Monte ou a entrada da avenida R. Pernambuco (próximo ao instituto de educação física). 
                            <br />
                            <br />
                            2. Ao iniciar em um desses locais os participantes automaticamente recebem 10 pontos, no caso da entrada próxima ao IEFES (Instituto de Educação Física e Esportes) esses pontos sobem para 20, já que é a entrada mais distante. 
                            <br />
                            <br />
                            3. Escolhida a entrada os participantes devem agora visitar os pontos centrais de ufc, que valem 30 pontos cada, esses são: Biblioteca Central, Administração do Centro de Tecnologias, RU 1, ICA, entrada do Centro de Ciências, RU 2 e por fim o Instituto Universidade Virtual ou melhor: o bloco de SMD.
                            <br />
                            <br />
                            4. Durante os percursos mais locais como: cantina da engenharia, cantina da biologia, biblioteca da física, DA da química e etc, valem 10 pontos cada, e servem para aumentar a pontuação total da equipe até que se chegue ao ponto final. Além disso existem pontos extras, mais afastados, que valem 20 pontos, que podem ser importantes para aqueles que souberem administrar suas rotas, esses por sua vez são: DETI (bloco da engenharia da computação e telecomunicações), “barco da engenharia de pesca”, teto da zootecnia, fazendas da agronomia e o bloco 732.
                            <br />
                            <br />
                            5. Ao escanear os QR codes presentes em cada um desses lugares, os Pontos de Poder vão automaticamente pro seus Zords, que ao total devem ter no mínimo 250 de pontos, para que consiga derrotar o chefão Vraque, passando para a segunda etapa onde a equipe vencedora é escolhida entre aquelas que chegaram ao bloco, sendo que a equipe cujo Zord tem mais pontos de poder triunfa sobre as outras e ganha o título de Zord Explorados e em caso de empate, aqueles que chegaram antes se consagram como vitoriosos.
                        </Texto__Paragraph>
                    </Texto__Container>

                    <BTN__Container>
                        <Btn>
                            <BotaoNext
                                link="/desafio"
                                texto="Voltar para desafios"
                            />
                        </Btn>
                        <Btn>
                            <BotaoNext
                                link="/controle"
                                texto="Ir para verificação"
                            />
                        </Btn>
                    </BTN__Container>
                </Regras__Container>
            </GridPrincipal>
        </>
    )
}

const Regras__Container = styled.section`
    width: 100%;
    height: 100%;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-secondary-light-3);
    overflow: hidden;
    z-index: 100;

    &::after {
        content: "";
        position: absolute;
        width: 60rem;
        height: 60rem;
        border: 1.8rem solid var(--color-terciary);
        border-radius: 100%;
        bottom: 30%;
        right: 5%;
        z-index: -1;
        box-shadow:  0 0 3rem var(--color-terciary), inset 0 0 3rem var(--color-terciary);
    }

    &::before {
        content: "";
        position: absolute;
        width: 45rem;
        height: 45rem;
        border: 1.2rem solid var(--color-terciary);
        border-radius: 100%;
        top: 55%;
        left: 12%;
        z-index: -1;
        box-shadow:  0 0 3rem var(--color-terciary), inset 0 0 3rem var(--color-terciary);
    }
`

const Texto__Container = styled.div`
    width: 80%;
    height: 75%;
    margin-top: 7rem;
    
    display: flex;
    flex-direction: column;
    gap: 3.5rem;

    padding: 2rem;
    border-radius: .5rem;
    background-color: var(--color-secondary-light-5);
`

const BTN__Container = styled.div`
    margin-top: 3rem;
    display: flex;
    gap: 5rem;
`

const Btn = styled.div`
    background-color: var(--color-secondary-light-2);
    color: var(--color-secondary-dark-1);
    cursor: pointer;
    transition: all .2s;

    &:hover,
    &:focus {
        transform: scale(1.04) translateY(-3px);
        background-color: var(--color-terciary-light-1);
    }

    &:active {
        transform: scale(1.02) translateY(-1.5px);
        background-color: var(--color-terciary);
    }
`

const Texto__Heading = styled.h2`
    font-size: 3.5rem;
    letter-spacing: .1rem;
    color: var(--color-secondary-dark-1);
    text-shadow: 0 .2rem .4rem #00000030;
    margin-left: 3rem;
    margin-top: 3rem;
`

const Texto__Paragraph = styled.p`
    font-size: 1.6rem;
    columns: 2;
    color: var(--color-secondary);
    align-self: center;
    width: 90%;
`

export default PaginaRegras;