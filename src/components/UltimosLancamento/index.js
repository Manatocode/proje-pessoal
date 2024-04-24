import { livros } from './dadosUltimosLancamento'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const UltimosLancamentoContainer = styled.section`
display:flex
justify-content: center;
align-items: center;
text-align: center;
height: 100vh;
`
const ImgLivro = styled.img`
display: inline-block;
margin: 5dvw 1dvh;
width: 250px;
border-radius: 16px
`
const NovosLivrosContainer = styled.div`

`


function UltimosLancamento() {


    return (
        <UltimosLancamentoContainer>
            <Container>
                <Row>
                    <h2>Ultimos Lançamentos</h2>
                    <NovosLivrosContainer>
                    {livros.map(livro => (
                        <ImgLivro src={livro.src} />                     

                    ))}
                    </NovosLivrosContainer>
                    </Row>
                    </Container>
        </UltimosLancamentoContainer>
        
        

    )
        
}

  
export default UltimosLancamento