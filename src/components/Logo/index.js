import logo from '../../imagens/arvore.png'
import styled from 'styled-components';

const ContainerLogo = styled.div`
display: flex;
   
`
const ImagemLogo = styled.img`
display: block;
height: 75px;
margin-right: 45px;
`
const Titulo = styled.h1`
display: inline;
`

function Logo() {
    return (
        <ContainerLogo className='logo'>
            <ImagemLogo  src={logo} alt='Personagem' />
            <Titulo>"Joana Eru'Anna"</Titulo>
        </ContainerLogo>
        
    )
}

export default Logo;