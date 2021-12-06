import React from "react";
import {
 Imagem,
 ContainerMain,
 ContainerHeader,
 ContainerCard,
 Match
} from "./CardMatch.styled"
import people from '../../assents/people.svg'


export default class CardMatch extends React.Component {

 render() {
  return (
   <ContainerCard>
    <ContainerHeader>
     <img src={people} onClick={this.props.changePage}></img>
     <h1>Astro Match</h1>
    </ContainerHeader>
    <ContainerMain>
     {this.props.match.map((profile) => {
      return (<Match>
       <Imagem src={profile.photo} />
       <p>{profile.name}</p>
      </Match>)
     })}
    </ContainerMain>
   </ContainerCard>
  );
 }
}