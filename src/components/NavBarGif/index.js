import xicara from '../../imagens/xicara-de-cafe.gif'
import styled from 'styled-components';

const CointanerIcone = styled.ul`
display: flex;
align-items: center;
`
const Icone = styled.img`
height: 05vh
`

const icones = [xicara];

function icon() {
    return (
        <CointanerIcone>
          {icones.map((icone) => (
            <Icone src={icone}></Icone>
          ))
          }
        </ CointanerIcone>
    )
}

export default icon;
