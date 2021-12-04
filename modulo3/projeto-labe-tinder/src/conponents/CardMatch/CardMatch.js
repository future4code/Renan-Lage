import React from "react";
import {
 Imagem,
 ContainerMain,
 ContainerHeader,
 ContainerCard,
 Match
} from "./CardMatch.styled"


export default class CardMatch extends React.Component {

 render() {
  return (
   <ContainerCard>
    <ContainerHeader>
     <button onClick={this.props.changePage}>Choice</button>
     <h1>Astro Match</h1>
    </ContainerHeader>
    <ContainerMain>
     {this.props.match.map((profile) => {
      return (<Match>
       <Imagem src={profile.photo}/>
       <p>{profile.name}</p>
      </Match>)
     })}
    </ContainerMain>
   </ContainerCard>
  );
 }
}