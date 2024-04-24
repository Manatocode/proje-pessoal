import Logo from '../Logo'
import NavBar from '../NavBar'
import NavBarGif from '../NavBarGif'
import styled from 'styled-components'

const HeaderContainer = styled.header`
background-color: #FFF;
    display: flex;
    justify-content: center;
    margin: 1dvh 0 0 0;
`

function Header() {
    return (
    <HeaderContainer>
        <Logo />
        <NavBar />
        <NavBarGif />
    </HeaderContainer>
    )
}



export default Header;