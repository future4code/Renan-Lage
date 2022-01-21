import { Container, ContainerButtons  } from "./CreateTripPage.style"

export default function CreateTripPage() {
 return (
  <Container>
   <h1>Criar viagem</h1>
   <label>
    Nome:
    <input></input>
   </label>
   <select>
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
   </select>
   <label>
    Data:
    <input type="date"></input>
   </label>
   <label>
    Descrição:
    <input></input>
   </label>
   <label>
    Duração:
    <input></input>
   </label>
   <ContainerButtons>
    <button>Voltar</button>
    <button>Enviar</button>
   </ContainerButtons>
  </Container>
 )
}