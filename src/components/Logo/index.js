
import logo from '../../imagens/logo.svg'
import { Link } from 'react-router-dom'
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
                <Link to="/">
            <LogoContainer>
                    <LogoImg src={logo} alt="Logo alura books"/>
                    <p><strong>Alura</strong>Books</p>
            </LogoContainer>
                </Link>
        </div>
    )
}
export default Logo