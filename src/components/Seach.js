import styled from "styled-components";
import Input from "./Input";
import { useState } from "react";
import { livros } from "./listaLivros";

const SeachContainer = styled.div`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
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
function Search (){
    const [livrosPesquisados, setLivrosPesquisados] = useState([])
    console.log(livrosPesquisados)
    return (
        <SeachContainer>
            <Titulo>Já sabe por onde começar</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input placeholder="Encontre aqui" 
            onBlur={(event) =>{
                const textoDigitado= event.target.value
                const resultadoPesquisa = livros.filter( (livro => livro.nome.includes(textoDigitado)))
                setLivrosPesquisados(resultadoPesquisa)

            } }
            />
            <p>{`O texto digitado é ${livrosPesquisados}`}</p>
        </SeachContainer>
    )
}

export default Search