import React from "react";
import styled from "styled-components";
import axios from "axios";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  button{
    margin-top: 10%;
  }
`
const LabelLogin = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;

`
export default class LoginPage extends React.Component {
  state = {
    nome: "",
    email: ""
  }
  onChangeNome = (ev) => {
    this.setState({ nome: ev.target.value })
  }
  onChangeEmail = (ev) => {
    this.setState({ email: ev.target.value })
  }

  crateUser = () => {
    const body = {
      name: this.state.nome,
      email: this.state.email
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization:"renan-lopresti-carver"
          }
        }
      )
      .then(() => {
        alert(`Usuario ${this.state.nome} criado com sucesso!`)
        this.setState({nome:"", email:""})
      })
      .catch((err) => {
        alert("Erro ao criar o usuario")
        console.log(err)
      })
  }

  render() {

    return (
      <LoginContainer>
        <LabelLogin>
          Nome:
          <input
            value={this.state.nome}
            onChange={this.onChangeNome}
            placeholder="Nome"
          />
        </LabelLogin>
        <LabelLogin>
          Email:
          <input
            value={this.state.email}
            onChange={this.onChangeEmail}
            placeholder="Email"
          />
        </LabelLogin>
        <button
          onClick={this.crateUser}
        >Enviar</button>
      </LoginContainer>

    )
  }
}