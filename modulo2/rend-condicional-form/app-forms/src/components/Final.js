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

export default class Final extends React.Component {
  render() {

    return (
      <Container>
        <h1>O Formulário Acabou</h1>
        <p>Muito obrigado por participar! Entraremos em contato!</p>
      </Container>
    );
  }
}
