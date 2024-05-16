import Input from "../Input"
import styled from 'styled-components'
import { useState } from "react"
import { livros } from './dadosPesquisa'
import { useEffect } from "react"
import { getLivros } from "../../servicos/livros"

const PesquisaContainer = styled.section`
background: rgb(34,193,195);
background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(255,255,255,1) 100%);
color: #black;
        text-align: center;
        padding: 85px 0;
        height: 570px;
        width: 100%;
`
const Titulo = styled.h2`
        
        font-size: 36px;
        text-align: center;
        width: 100%;
`
const Subtitulo = styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;

`
const Resultado = styled.div`
color: #black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        color: #black;
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`


function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])
    const [livros, setLivros] = useState([])

    useEffect(() => {
        fetchLivros()
    }, []) 

    async function fetchLivros() {
        const livrosDaApi = await getLivros()
        setLivros(livrosDaApi)
    }
    

    return (
        <PesquisaContainer>
            <Titulo>Pesquise aqui, o seu personagem.</Titulo>
            <Subtitulo>Encontre a sua próxima aventura.</Subtitulo>
            <Input
                placeholder="Se aventure..."
                onBlur={ evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />
            {livrosPesquisados.map( livro => (<Resultado><p>{livro.nome}</p> <img src={livro.src}/></Resultado>))}
                        
        </PesquisaContainer>
    )
}

export default Pesquisa