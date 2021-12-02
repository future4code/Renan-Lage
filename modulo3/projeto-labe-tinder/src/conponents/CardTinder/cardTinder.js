import React from "react"; 
import {
  Imagem,
  ContainerFooter,
  ContainerMain,
  ContainerHeader,
  ContainerCard
} from "./cardTinder.styles"


export default class CardContainer extends React.Component {

  render() {
    return (
      <ContainerCard>
        <ContainerHeader>
          <h1>Astro Match</h1>
          <button onClick={this.props.changePage}>Matchs</button>
        </ContainerHeader>
        <ContainerMain>
          <Imagem src={this.props.profile.photo} />
          <h2>{this.props.profile.name}, {this.props.profile.age}</h2>
          <p className="descricao">{this.props.profile.bio}</p>
        </ContainerMain>
        <ContainerFooter>
          <button onClick={()=>this.props.choiceMatch(false)}>No</button>
          <button onClick={()=>this.props.choiceMatch(true)}>Yes</button>
        </ContainerFooter>
      </ContainerCard>
    );
  }
}