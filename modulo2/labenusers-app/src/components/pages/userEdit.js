import React from "react";
import axios from "axios";
import styled from "styled-components";

const LabelModify = styled.div`
display: flex;
flex-direction: column;
`

const EditContainer = styled.div`
display: flex;
flex-direction: column;
button{
margin-block-end: 10%;
}
`
const axionAuthorization = {
  headers: {
    Authorization: "renan-lopresti-carver"
  }
}

export default class UserEdit extends React.Component {
  state = {
    page: "UserEdit",
    userEdit: false,
    user: {},
    nome: "",
    email: "",
    modifyNome: "",
    modifyEmail: "",
  }
  componentDidMount() {
    this.getUserComplete()
  }

  getUserComplete = () => {

    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.props.userId}`,
        axionAuthorization
      )
      .then(res => {
        this.setState({ user: res.data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  showImputEdit = () => {
    if (this.state.userEdit === true) {
      this.setState({ userEdit: false })
    } else {
      this.setState({ userEdit: true })
    }
  }

  onChangeName = (ev) => {
    this.setState({ modifyNome: ev.target.value })
  }

  onChangeEmail = (ev) => {
    this.setState({ modifyEmail: ev.target.value })
  }
  modifyUser = () => {
    const body = {
      name: "fernan"
    };

    axios
      .put(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.props.userId}`,
        axionAuthorization,
        body
      )
      .then(() => {
        this.setState({ nome: "", email: "" });
        this.getUserComplete()
        alert("Usuarios alterado")
      })
      .catch(err => {
        alert("erro ao alterar o usuario")
        console.log(err)
      })
  }

  render() {

    return (
      <EditContainer>

        <div>
          <p>{this.state.user.name}</p>
          <p>{this.state.user.email}</p>
        </div>
        {this.state.userEdit === false ? (
          <div>
            <button onClick={this.showImputEdit}>Editar Usuario</button>
          </div>
        ) :
          (
            <div>
              <LabelModify>
                <input
                  value={this.state.modifyNome}
                  onChange={this.onChangeName}
                />
                <input
                  value={this.state.modifyEmail}
                  onChange={this.onChangeEmail}
                />
                <button onClick={this.modifyUser}>Salvar Alterações</button>
              </LabelModify>
            </div>
          )}
        <button onClick={this.props.changePage}>Voltar Para pagina de usuarios</button>

      </EditContainer>
    )
  }
}
