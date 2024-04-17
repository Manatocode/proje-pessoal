import Input from "../Input"
import styled from 'styled-components'
import { useState } from "react"

const PesquisaContainer = styled.section`
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: 270px;
        width: 100%;
`

const Titulo = styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`

const Subtitulo = styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`


function Pesquisa() {
    const [textoDigitado, setTextoDigitado] = useState('')
    return (
        <PesquisaContainer>
            <Titulo>Pesquise aqui, o seu personagem.</Titulo>
            <Subtitulo>Encontre a sua próxima aventura.</Subtitulo>
            <Input
                placeholder="Se aventure..."
                onBlur={ evento => setTextoDigitado(evento.target.value)}
            />
                        
        </PesquisaContainer>
    )
}

export default Pesquisa