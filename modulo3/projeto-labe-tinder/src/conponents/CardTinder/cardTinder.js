import React from "react";
import {
  Imagem,
  ContainerFooter,
  ContainerMain,
  ContainerHeader,
  ContainerCard
} from "./cardTinder.styles"
import heart from '../../assents/favorite.svg'
import close from '../../assents/close.svg'
import people from '../../assents/people.svg'
import { Card } from "@material-ui/core";



export default class CardContainer extends React.Component {

  render() {
    return (
      <Card>
        <ContainerHeader>
          <h1>Astro Match</h1>
          <img src={people} onClick={this.props.changePage}></img>
        </ContainerHeader>
        {this.props.profileValido ?
          <ContainerMain style={{ backgroundImage: `url(${this.props.profile.photo})` }}>
            <h2>{this.props.profile.name}, {this.props.profile.age}</h2>
            <p className="descricao">{this.props.profile.bio}</p>
          </ContainerMain> :
          <ContainerMain style={{ justifyContent: "center"}}>
            <h1>Sem Perfis</h1>
          </ContainerMain>}
        <ContainerFooter>
          <img src={close} disabled={this.props.profileValido} onClick={() => this.props.choiceMatch(false)}></img>
          <img src={heart} disabled={this.props.profileValido} onClick={() => this.props.choiceMatch(true)}></img>
        </ContainerFooter>
      </Card >
    );
  }
}