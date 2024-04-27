import { livros } from './dadosUltimosLancamento'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardRecomenda from '../CardRecomenda';
import imagemLivro from '../../imagens/esquerda.jpg'
import { Titulo }  from '../Titulo'


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
                    <NovosLivrosContainer>
                    <Titulo cor={"000"}               
                    
                    >                    
                    Ultimos Lançamentos</Titulo>
                    {livros.map(livro => (
                        <ImgLivro src={livro.src} />                    
                    ))}
                    </NovosLivrosContainer>
                    <CardRecomenda 
                    titulo="Talvez você se interesse por"
                    subtitulo="Angular 11"
                    descricao="Construindo uma aplicação com a plataforma Google"
                    img={imagemLivro}
                    />
                    
                    </Row>
                    </Container>
        </UltimosLancamentoContainer>

    )
        
}

  
export default UltimosLancamento