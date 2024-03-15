import './style.css'
import xicara from '../../imagens/xicara-de-cafe.gif'

const icones = [xicara];

function icon() {
    return (
        <ul className='icons'>
          {icones.map((icone) => (
            <li className='icon'><img src={icone}></img></li>
          ))
          }
        </ul>
    )
}

export default icon;
