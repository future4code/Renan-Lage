import React from "react";
import axios from "axios";
import styled from "styled-components";
import UserEdit from "./userEdit";


const UserContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center; 
`
const NomeContainer = styled.div`
  display: flex;
  align-items: center;
p{
  padding-right: 40%;
}
`
const axionAuthorization = {
  headers: {
    Authorization: "renan-lopresti-carver"
  }
};

export default class UserPage extends React.Component {
  state = {
    usuarios: [],
    page: "userPage",
    userId:""
  }
  componentDiMont() {
    this.getUsers()
  }
  getUsers = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        axionAuthorization
      )
      .then((res) => {
        this.setState({ usuarios: res.data })
      }
      )
  }
  deleteUser = (userId) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
        axionAuthorization
      )
      .then(() => {
        console.log("Usuario apagado com sucesso!")
      })
      .catch(err => {
        console.log(err)
      })
  }
  ChangePage = (userId) =>{
     if(this.state.page === "userPage"){
       this.setState({userId: userId, page:"UserEdit"})
     }
  }

  render() {
    this.getUsers()
    return (
      <UserContainer>{this.state.page === "userPage" ? (<div>
          {this.state.usuarios.length === 0 && <div>Carregando...</div> }
          {this.state.usuarios.map(usuario => (
            <NomeContainer>
              <p onClick={() => this.ChangePage(usuario.id)}>{usuario.name}</p>
              <button onClick={() => this.deleteUser(usuario.id)}>Deletar</button>
            </NomeContainer>
          ))}
          </div>
        ): (
          <UserEdit
          userId={this.state.userId}
          />
        )
        }

      </UserContainer>
    )
  }
}