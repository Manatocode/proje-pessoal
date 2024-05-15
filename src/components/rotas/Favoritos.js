import Header from '../Header'
import Pesquisa from '../Pesquisa';
import UltimosLancamento from '../UltimosLancamento';
import styled from 'styled-components'


const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgb(34,193,195);
background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(255,255,255,1) 100%);
`

function Favoritos() {
  return (
    <AppContainer>
      <Pesquisa />
    </AppContainer>
    
  );
}

export default Favoritos;
