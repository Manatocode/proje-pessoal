import './style.css'
import Logo from '../Logo'
import NavBar from '../NavBar'
import NavBarGif from '../NavBarGif'
import styled from 'styled-components'

const HeaderContainer = styled.header`
background-color: white;
display: flex;
justify-content: center;
}
`

function Header() {
    return (<HeaderContainer>
        <Logo />
        <NavBar />
        <NavBarGif />
    </HeaderContainer>
    )
}



export default Header;