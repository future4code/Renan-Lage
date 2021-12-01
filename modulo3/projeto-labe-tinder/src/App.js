import './App.styled.js';
import React from 'react';
import CardContainer from './conponents/CardTinder/cardTinder';
import { Body } from './App.styled.js';
import axios from "axios";

export default class App extends React.Component {

  render() {

    return (
      <Body>
        <CardContainer/>
      </Body>
    )
  }
}

