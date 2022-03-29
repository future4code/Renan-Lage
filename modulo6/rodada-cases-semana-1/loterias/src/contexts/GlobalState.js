import React, { useState } from "react";
import { GlobalContext } from "./GlobalStateContext";

const GlobalState = (props) => {

 const [lot, setLot] = useState({})
 const [select, setSelect] = useState('Selecione a loteria')
 const [lotterys, setLotterys] = useState([])
 const [lotterysConcurse, setLotterysConcurse] = useState([])
 const [color, setColor] = useState()

 const states = {
  lotterys,
  select,
  lotterysConcurse,
  lot,
  color
 }
 const setters = {
  setLotterys,
  setSelect,
  setLotterysConcurse,
  setLot,
  setColor
 }

 return (
  <GlobalContext.Provider value={{ states, setters }}>
   {props.children}
  </GlobalContext.Provider>
 );
};

export default GlobalState;