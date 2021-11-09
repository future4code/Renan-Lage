import React from 'react';
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
export default class Etapa1 extends React.Component {

  render() {
  
    return (
      <Container>
        <div>
          <h1>Etapa 1 - Dados Gerais</h1>
        </div>
        <div>
          <Formulario>
              <p>1. Qual o seu nome?</p>
              <input type="text" name="name" />
          </Formulario>
          <Formulario>
              <p>2. Qual a sua idade?</p>
              <input type="text" name="name" />
          </Formulario>
          <Formulario>
             <p>3. Qual o seu e-mail?</p>
              <input type="text" name="name" />
            </Formulario>
          <Formulario>
              <p>4. Qual a sua Escolaridade?</p>
              <select>
                <option>Ensino Médio Incompleto</option>
                <option>Ensino Médio Completo</option>
                <option>Ensino Superior Incompleto</option>
                <option>Ensino Superior Completo</option>
              </select>
          </Formulario>
          </div>
      </Container>
    );
  }
}
