import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import React from "react";
import useForm from "../../hooks/useForm"
import { InputsContainer } from "./SignUpPage.style";
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../services/user';

export default function SignUpForm() {
 const [form, onChange, clear] = useForm({username:"", email: "", password: "" })
 const history = useNavigate()
 const [isLoading, setIsLoading] = useState(false)

 const onSubmitForm = (event) => {
  event.preventDefault()
  signUp(form, clear, history, setIsLoading)
 }

 return (
  <InputsContainer>
   <form onSubmit={onSubmitForm}>
   <TextField
     name={"username"}
     value={form.username}
     onChange={onChange}
     label={"Nome"}
     fullWidth
     margin={"dense"}
     required
     type={"text"}
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
    <Button
     type={"submit"}
     fullWidth
     variant={'contained'}
     color={"primary"}
    >{isLoading ? <CircularProgress color='inherit' size={24} /> : <>Criar perfil</>}</Button>
   </form>
  </InputsContainer>
 )
}