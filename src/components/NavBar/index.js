import './style.css'

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

function opcao() {

    return (<ul className='opcoes'>
        {textoOpcoes.map((texto) => (
            <li className='opcao'><p>{texto}</p></li>
        ))
        }
    </ul>)

}


export default opcao;
