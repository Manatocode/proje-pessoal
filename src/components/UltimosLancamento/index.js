import { livros } from './dadosUltimosLancamento'
import styled from 'styled-components'

const UltimosLancamentoContainer = styled.section`

`


function UltimosLancamento () {

    
    return (
        <UltimosLancamentoContainer>
             <h2>Ultimos Lançamentos</h2>
                {livros.map( livro => (
                <img src={livro.src}/>
        ))}
        </UltimosLancamentoContainer>
<<<<<<< HEAD

=======
       
>>>>>>> parent of d93ae8a (5)
    )
}

export default UltimosLancamento