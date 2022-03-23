import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../contexts/GlobalStateContext"
import { getLotterrysConcurse, getLotteryDetail, getLotterys } from "../../services/lottery"

export default function HomePage() {

 const { states, setters } = useContext(GlobalContext)

 useEffect(() => {
  getLotterys(setters.setLotterys)
  getLotterrysConcurse(setters.setLotterysConcurse)
 }, [])

 useEffect(() => {
  if (states.select !== "Selecione a loteria") {
   let concurseId = states.lotterysConcurse.filter((lot) => {
    return states.select == lot.loteriaId
   })
   getLotteryDetail(setters.setLot, concurseId[0].concursoId)
  }
 }, [states.select])

 const onChange = (ev) => {
  setters.setSelect(ev.target.value)
 }

 return (
  <div>
   <select id="lotterys" onChange={onChange} value={states.select}>
    <option value={'Selecione a loteria'}>Selecione a loteria</option>
    {states.lotterys.map((lot) => {
     return (
      <option
       value={lot.id}
       key={lot.id}
       id={lot.id}
      >{lot.nome}</option>
     )
    })}
   </select>
  </div>
 )
}