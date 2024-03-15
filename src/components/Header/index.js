import './style.css'
import Logo from '../Logo'
import NavBar from '../NavBar'
import NavBarGif from '../NavBarGif'

function Header() {
    return (<header className="App-header">
        <Logo />
        <NavBar />
        <NavBarGif />
    </header>
    )
}



export default Header;