import React from "react";
import axios from "axios";
import styled from "styled-components";

const EditContainer = styled.div`
display: flex;
flex-direction: column;
`
const axionAuthorization = {
  headers: {
    Authorization: "renan-lopresti-carver"
  }
};
export default class UserEdit extends React.Component {
  state = {
    user: {},
    nome: "",
    email: ""
  }
  componentDidMount (){
    this.getUserComplete()
  }

  getUserComplete = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.props.userId}`,
        axionAuthorization
      )
      .then(res =>{
        this.setState({user:res.data})
      })
      .catch(err =>{
        console.log(err)
      })
  }
  render() {

    return (
      <EditContainer>
        <p>{this.state.user.name}</p>
        <p>{this.state.user.email}</p>
      </EditContainer>
    )
  }
}