import React, { useState } from "react";
import { GlobalContext } from "./GlobalStateContext";

const GlobalState = (props) => {

 const [lotterys, setLotterys] = useState([])

 const states = { lotterys }
 const setters = { setLotterys }

 return (
  <GlobalContext.Provider value={{ states, setters }}>
   {props.children}
  </GlobalContext.Provider>
 );
};

export default GlobalState;