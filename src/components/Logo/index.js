import './style.css'
import logo from '../../imagens/arvore.png'

function Logo() {
    return (
        <div className='logo'>
            <img className='imagemmeio' src={logo} alt='Personagem'></img>
            <h1>"Joana Eru'Anna"</h1>
        </div>
    )
}

export default Logo;