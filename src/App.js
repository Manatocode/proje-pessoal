import Header from './components/Header'
import Pesquisa from './components/Pesquisa';
import UltimosLancamento from './components/UltimosLancamento';
import styled from 'styled-components'


const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
      <UltimosLancamento />
      
    </AppContainer>
    
  );
}

export default App;
