import { Container } from "./CardTrip.style"

export default function CardTrip(props){
 
 return(
  <Container>
    <p><b>Nome:</b> {props.name}</p>
    <p><b>Descrição:</b> {props.description}</p>
    <p><b>Planeta:</b> {props.planet}</p>
    <p><b>Duração:</b> {props.durationInDays}</p>
    <p><b>Data:</b> {props.date}</p>
    </Container>
 )
} 
