import styled from 'styled-components'

import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
const icone = [perfil, sacola]

const Icones = styled.ul`
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
 
function OpcoesIcones (){
    return (
        <Icones>
            {icone.map((icones) => (
            <Opcao><img src={icones}></img></Opcao>
            ))}
      </Icones>
    )

}
export default OpcoesIcones