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
.descricao{
 text-align: center;
 width: 68%;
}
display: flex;
align-items: center;
flex-direction: column;
h2{
  margin: 0;
 padding: 0;
 }
p{
 margin-inline: 2%;
 padding: 0;

}
`
export const Match = styled.div`
width: 90%;
justify-content: space-around;
display: flex;
flex-direction: row;
align-items: center;
padding: 1%;
img{
  border-radius: 50%;
}
p{
 text-align: center;
}
`

export const Imagem = styled.img`
max-height: 50px;
`


