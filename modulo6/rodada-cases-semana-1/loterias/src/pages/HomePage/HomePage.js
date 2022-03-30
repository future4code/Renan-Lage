import React, { useContext, useEffect, useState } from "react"
import { DivNum, DivNumber, Parag, DivImg, Title, DivMain, DivLeft, DivRight, DivLogo, Img1, Img2, DivDescription } from "./styled"
import { GlobalContext } from "../../contexts/GlobalStateContext"
import { getLotterrysConcurse, getLotteryDetail, getLotterys } from "../../services/lottery"
import logo1 from '../../assets/path2.svg'
import logo2 from '../../assets/path3.svg'

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
  defineColor()
 }, [states.select])

 const onChange = (ev) => {
  setters.setSelect(ev.target.value)
 }

 const defineColor = () => {
  if (states.select == "Selecione a loteria") {
   setters.setColor('#707070')
  } else if (states.select == 0) {
   setters.setColor('#6BEFA3')
  } else if (states.select == 1) {
   setters.setColor('#8666EF')
  } else if (states.select == 2) {
   setters.setColor('#DD7AC6')
  } else if (states.select == 3) {
   setters.setColor('#FFAB64')
  } else if (states.select == 4) {
   setters.setColor('#5AAD7D')
  } else if (states.select == 5) {
   setters.setColor('#BFAF83')
  }
 }

 return (
  <DivMain style={{ backgroundColor: `${states.color}` }}>
   <DivLeft>
    <select onChange={onChange} value={states.select}>
     <option value={'Selecione a loteria'}>Selecione a loteria</option>
     {states.lotterys.map((lot) => {
      return (
       <option
        value={lot.id}
        key={lot.id}
       >{lot.nome}</option>
      )
     })}
    </select>
    <DivLogo>
     <DivImg>
      <Img1 src={logo1} />
      <Img2 src={logo2} />
     </DivImg>
     <Title>{states.select != 'Selecione a loteria' ? states.lotterys[states.select].nome.toUpperCase() : null}</Title>
    </DivLogo>
    <DivDescription>
     <Title>Concurso</Title>
     <Title>{states.select != 'Selecione a loteria' ? states.lotterysConcurse[states.select].concursoId : null}</Title>
     <Title>
      {states.select != 'Selecione a loteria' ? states.lot.data : null}
     </Title>
    </DivDescription>
   </DivLeft>
   <DivRight>
    <DivNumber>
     {states.lot && states.lot.numeros && states.lot.numeros.map((num) => {
      return (
       <DivNum
        key={num}
       >
        <Parag>{num}</Parag>
       </DivNum>
      )
     })}
    </DivNumber>
   </DivRight>
  </DivMain>
 )
}