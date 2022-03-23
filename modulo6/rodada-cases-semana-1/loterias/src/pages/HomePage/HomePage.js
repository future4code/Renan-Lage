import React, { useContext, useEffect } from "react"
import { GlobalContext } from "../../contexts/GlobalStateContext"
import { getLotterys } from "../../services/lottery"

export default function HomePage() {
 const { states, setters } = useContext(GlobalContext)
 useEffect(() => {
  getLotterys(setters.setLotterys)
 }, [])

 return (
  <div>
   <select id="lotterys">
    {states.lotterys.map((lot)=>{
     return(
      <option key={lot.id} id={lot.id}>{lot.nome}</option>
     )
    })}
   </select>
  </div>
 )
}