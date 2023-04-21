// import styled from "styled-components";
import styled from "styled-components";
import { livros } from "./DadosUltimosLancamentos";
import ImagemLivro from "../imagens/livro2.png"
import { Titulo } from "./Titulo";
import { CardRecomenda } from "./CardRecomenda";

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`



const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos (){
    return (
        <UltimosLancamentosContainer>
            <Titulo cor="#000" 
            tamanhoFonte= "36px" 
            alinhamento="center"
            >Últimos Lançamentos</Titulo>
            <NovosLivrosContainer>
                {livros.map(livro => (
                    <img src={livro.src} alt="" />
                ))}
            </NovosLivrosContainer>
            <CardRecomenda 
                titulo="Talvel você se interesse por"
                subtitulo="Angular 11"
                descricao="Contruindo uma aplicação com a plataforma Google"
                img = {ImagemLivro}

            />
        </UltimosLancamentosContainer>
        

    )
}
export default UltimosLancamentos