import styled from 'styled-components';

import Logo from '../../components/Logo';
import OpcoesHeader from '../../components/OpcoesHeader';
import OpcoesIcones from '../../components/OpcoesIcones';

const HeaderContainer = styled.header`
    background-color: #fff;
    display: flex;
    flex-direction: center;
    align-items: center;
    justify-content: center;
`

function Header(){
    return (
        <HeaderContainer>
            <Logo />
            <OpcoesHeader />
            <OpcoesIcones />
        </HeaderContainer>  
    )
}

export default Header