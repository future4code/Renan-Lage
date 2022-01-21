import CardTrip from "../../components/CardTrip/CardTrip";
import { Container, ContainerButtons, ContainerCard } from "./ListTripsPage.style";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ListTripPage() {
 const [trips, setTrips] = useState([])
 const getTrips = () => {
  axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/:renan-lopresti-carver/trips")
   .then((res) => {
    setTrips(res.data.trips)
   })
   .catch((err) => {
    console.log(err.response)
   })
 }

useEffect(() => {
  getTrips();
}, []);

 return (
  <Container>
   <h1>Lista de Viagens</h1>
   <ContainerButtons>
    <button>Voltar</button>
    <button>Inscrever-se</button>
   </ContainerButtons>
   <ContainerCard>
    {trips.map((trip) => {
     return <CardTrip {...trip} />
    })}
   </ContainerCard>
  </Container>
 )
}