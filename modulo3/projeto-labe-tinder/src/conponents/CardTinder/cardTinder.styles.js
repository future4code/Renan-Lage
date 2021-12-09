import styled from "styled-components";

export const ContainerCard = styled.div`
display: flex;
flex-direction: column;
border: 1px solid black;
border-radius: 5px;
`

export const ContainerHeader = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
`

export const ContainerMain = styled.div`
width: 300px;
height: 300px;
background-size:contain;
background-position:center;
background-blend-mode: saturation;
backdrop-filter: opacity(80%);
display: flex;
align-items: center;
flex-direction: column;
justify-content: flex-end;
.descricao{
 text-align: center;
 width: 68%;
}
h2{
  margin: 0;
  padding: 0;
  color: whitesmoke;
  background: #202020;
 }
p{
 margin-inline: 2%;
 padding: 0;
  color: whitesmoke;
  background: #202020;
}
`

export const ContainerFooter = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
padding: 5%;

`

export const Imagem = styled.img`
max-height: 300px;
`
