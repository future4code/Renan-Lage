import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import React from "react";
import useForm from "../../hooks/useForm"
import { InputsContainer, SignUpFormContainer } from "./SignUpPage.style";
import { signUp } from '../../services/user';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';


export default function SignUpForm(setLoginButton) {
 const [form, onChange, clear] = useForm({ name: "", email: "", password: "" })
 const history = useNavigate()
 const [isLoading, setIsLoading] = useState(false)


 const onSubmitForm = (event) => {
  event.preventDefault()
  signUp(form, clear, history, setLoginButton, setIsLoading)
 }

 return (
  <form onSubmit={onSubmitForm}>
   <SignUpFormContainer>
    <InputsContainer>
     <TextField
      name={"name"}
      value={form.name}
      onChange={onChange}
      label={"Nome"}
      fullWidth
      margin={"dense"}
      required
     />
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
    </InputsContainer>
    <Button
     type={"submit"}
     fullWidth
     variant={'contained'}
     color={"primary"}
    >{isLoading ? <CircularProgress color='inherit' size={24} /> : <>Fazer Cadastro</>}</Button>
   </SignUpFormContainer>
  </form>
 )
}