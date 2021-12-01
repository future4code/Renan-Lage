import axios from "axios";
import React from "react";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";
import {
  Imagem,
  ContainerFooter,
  ContainerMain,
  ContainerHeader,
  ContainerCard
} from "./cardTinder.styles"



export default class CardContainer extends React.Component {
  state = {
    profile: []
  }

  getProfile = () => {
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:RenanLopresti/person"
    axios
      .get(url)
      .then((res) => {
        this.setState({profile: res.data.profile})
        console.log(res.data.profile)
      })
      .catch((err) => {
        console.log9(err)
      })
      
  }
  render() {

    return (
      <ContainerCard>
        <button onClick={this.getProfile}>pegar profile</button>
        <ContainerHeader>
          <h1>Astro Match</h1>
          <button>Matchs</button>
        </ContainerHeader>
        <ContainerMain>
          <Imagem src={this.state.profile.photo} />
          <h2>{this.state.profile.name}, {this.state.profile.age}</h2>
          <p className="descricao">{this.state.profile.bio}</p>
        </ContainerMain>
        <ContainerFooter>
          <button>No</button>
          <button>Yes</button>
        </ContainerFooter>
      </ContainerCard>
    );
  }
}