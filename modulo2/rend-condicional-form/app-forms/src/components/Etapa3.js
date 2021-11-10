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

export default class Etapa3 extends React.Component {
  render() {

    return (
      <Container>
        <h1>Etapa 3 - Informações Gerais de Ensino</h1>
        <Formulario>
         <p>6. Por que você não terminou um curso de graduação?</p>
            <input type="text" name="name" />
          </Formulario>
        <Formulario>
            <p>7. Você fez algum curso complementar?</p>
            <select>
              <option>Nenhum</option>
              <option>Curso Técnico</option>
              <option>Curso de Inglês</option>
            </select>
          </Formulario>
      </Container>
    );
  }
}
