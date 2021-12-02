import './App.styled.js';
import React from 'react';
import CardContainer from './conponents/CardTinder/cardTinder';
import CardMatch from './conponents/CardMatch/CardMatch.js';
import { Body } from './App.styled.js';
import axios from "axios";

export default class App extends React.Component {
  state = {
    profile: [],
    page: true
  }
  componentDidMount() {
    this.getProfile()
  }

  getProfile = () => {
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:RenanLopresti/person"
    axios
      .get(url)
      .then((res) => {
        this.setState({ profile: res.data.profile })
      })
      .catch((err) => {
        console.log9(err.data.response)
      })
  }

  changePage = () => {
    this.setState({ page: !this.state.page })
  }

  choiceMatch = (props) => {
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:RenanLopresti/choose-person"
    const body = {
      "id": `${this.state.profile.id}`,
      "choice": `${props}`
    }
    axios
      .post(url, body)
      .then(() => {
        this.getProfile()
      })
      .catch((err) => {
        console.log(err.data.response)
      })

  }
  render() {

    return (
      <Body>
        {this.state.page ? <CardContainer
          profile={this.state.profile}
          choiceMatch={() => this.choiceMatch()}
          changePage={this.changePage}
        /> :
          <CardMatch
            changePage={this.changePage}
          />
        }
      </Body>
    )
  }
}

