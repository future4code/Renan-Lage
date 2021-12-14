import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import React from "react";
import useForm from "../../hooks/useForm"
import { InputsContainer} from "./LoginPage.style";

export default function LoginForm() {
 const [form, onChange, clear] = useForm({ email: "", password: "" })
 
 const onSubmitForm = (event) => {
  event.preventDefault()
 }
 return (
  <InputsContainer>
   <form onSubmit={onSubmitForm}>
    <TextField
     name={"email"}
     value={form.email}
     onChange={onChange}
     label={"Email"}
     fullWidth
     margin={"dense"}
     required
     type={"email"}
    />
    <TextField
     name={"password"}
     value={form.password}
     onChange={onChange}
     label={"Senha"}
     fullWidth
     margin={"dense"}
     required
     type={"password"}
    />
    <Button
     type={"submit"}
     fullWidth
     variant={'contained'}
     color={"primary"}
    >Entrar</Button>
   </form>
  </InputsContainer>
 )
}