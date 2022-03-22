import React, { useState } from "react";
import { GlobalContext } from "./GlobalStateContext";
import axios from 'axios'
import { BASE_URL } from '../constants/url'

const GlobalState = (props) => {

 return (
  <GlobalContext.Provider value={{ states, setters }}>
   {props.children}
  </GlobalContext.Provider>
 );
};

export default GlobalState;