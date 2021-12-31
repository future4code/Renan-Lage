import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import React from "react";
import useForm from "../../hooks/useForm"
import { InputsContainer } from "./LoginPage.style";
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/user';

export default function LoginForm() {
 const [form, onChange, clear] = useForm({ email: "", password: "" })
 const history = useNavigate()
 const [isLoading, setIsLoading] = useState(false)

 const onSubmitForm = (event) => {
  event.preventDefault()
  login(form, clear, history, setIsLoading)
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
    >{isLoading ? <CircularProgress color='inherit' size={24} /> : <>Entrar</>}</Button>
   </form>
  </InputsContainer>
 )
}