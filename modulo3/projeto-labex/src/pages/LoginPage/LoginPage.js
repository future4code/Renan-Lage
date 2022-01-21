import { ContainerLogin, Containerbuttons } from "./LoginPage.style";

export default function Login() {
 return (
  <ContainerLogin>
   <h1>Login</h1>
   <label>
    email:
    <input></input>
   </label>
   <label>
    senha:
    <input></input>
   </label>
   <Containerbuttons>
    <button>Voltar</button>
    <button>Enviar</button>
   </Containerbuttons>
  </ContainerLogin>
 )
}