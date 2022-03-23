import React, { useState } from "react";
import { GlobalContext } from "./GlobalStateContext";

const GlobalState = (props) => {

 const [lot, setLot] = useState({})
 const [select, setSelect] = useState('Selecione a loteria')
 const [lotterys, setLotterys] = useState([])
 const [lotterysConcurse, setLotterysConcurse] = useState([])

 const states = {
  lotterys,
  select,
  lotterysConcurse,
  lot
 }
 const setters = {
  setLotterys,
  setSelect,
  setLotterysConcurse,
  setLot
 }

 return (
  <GlobalContext.Provider value={{ states, setters }}>
   {props.children}
  </GlobalContext.Provider>
 );
};

export default GlobalState;