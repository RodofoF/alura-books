
import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    font-size: 2rem;
    margin-right: 1rem;
`
const LogoImg = styled.img`
    margin-right: 1rem;
`

function Logo (){
    return (
        <div>
            <LogoContainer>
                <LogoImg src={logo} alt="Logo alura books"/>
                <p><strong>Alura</strong>Books</p>
            </LogoContainer>
        </div>
    )
}
export default Logo