import axios from "axios";
import React from "react";
import {
 Imagem,
 ContainerFooter,
 ContainerMain,
 ContainerHeader,
 ContainerCard,
 Match
} from "./CardMatch.styled"


export default class CardMatch extends React.Component {
 state = {
  match: []
 }
 componentDidMount() {
  this.getMatches()
 }

 getMatches = () => {
  const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:RenanLopresti/matches"
  axios(url)
   .then((res) => {
    this.setState({ match: res.data.matches })
    console.log(res.data)
   })
   .catch((err) => {
    console.log(err.data) 
   })
 }

 render() {
  return (
   <ContainerCard>
    <ContainerHeader>
     <button onClick={this.props.changePage}>Choice</button>
     <h1>Astro Match</h1>
    </ContainerHeader>
    <ContainerMain>
     {this.state.match.map((profile) => {
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