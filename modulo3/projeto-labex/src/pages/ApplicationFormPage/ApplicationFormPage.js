import { Container, ContainerButtons } from "./ApplicationFormPage.style"

export default function ApplicationFormPage() {
 return (
  <Container>
   <h1>Inscreva-se para uma viagem</h1>
   <select>
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
   </select>
   <label>
    Nome:
    <input></input>
   </label>
   <label>
    Idade:
    <input></input>
   </label>
   <label>
    Texto da Candidatura:
    <input></input>
   </label>
   <label>
    Profissão:
    <input></input>
   </label>
   <select>
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
   </select>
   <ContainerButtons>
    <button>Voltar</button>
    <button>Enviar</button>
   </ContainerButtons>
  </Container>
 )
}