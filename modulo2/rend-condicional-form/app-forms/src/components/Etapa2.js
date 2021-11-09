import React from "react";
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const Formulario = styled.form `
display:flex;
flex-direction: column;
align-items: center;
`
export default class Etapa2 extends React.Component {
  render() {

    return (
      <Container>
        <h1>Etapa 2 - Informações do Ensino Superior</h1>
        <Formulario>
          <p>5. Qual curso?</p>
          <input type="text" name="name" />
        </Formulario>
        <Formulario>
          <p>6. Qual a unidade de ensino?</p>
          <input type="text" name="name" />
        </Formulario>
      </Container>
    );
  }
}
