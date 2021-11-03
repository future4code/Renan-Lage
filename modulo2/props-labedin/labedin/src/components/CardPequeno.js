import React from "react";
import styled from "styled-components";
const CardPequenoContainer = styled.div`
  display: flex;
  flex-direction: column;

`;

const Container = styled.div `
  display: flex;
  padding: 3%;
  margin-top: 5%;
  border: 1px black solid;
  img{
    margin-right: 3%;
    width: 6%;
  }
  
`;

function CardPequeno(props) {
  return(
    <CardPequenoContainer>
      <Container>
        <img src={ props.imagemEmail}/>
        <p><b>Email: </b>{props.email }</p>
      </Container>

      <Container>
        <img src={ props.imagemEndereco }/>
        <p><b>Endereço: </b>{ props.endereco }</p>
      </Container>
    </CardPequenoContainer>

  )
}

export default CardPequeno;