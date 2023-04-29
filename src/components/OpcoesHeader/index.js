import styled from 'styled-components'
import { Link } from 'react-router-dom'
const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

const Opcoes = styled.ul`
    display: flex;
`
const Opcao = styled.li`
    font-size: 1rem;
    flex-direction: row;
    align-items: center;
    text-align: center;
    justify-content: center;
    min-width: 120px;
    cursor: pointer;
    height: 100%;
    padding: 0 .5rem;
`

function OpcoesHeader(){
    return (
        <Opcoes>
            {textoOpcoes.map((texto) => (
                <Link to={`/${texto.toLowerCase()}`}><Opcao><p>{texto}</p></Opcao></Link>
            ))}
        </Opcoes>
    )
}
export default OpcoesHeader