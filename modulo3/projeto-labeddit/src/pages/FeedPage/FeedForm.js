import React from "react";
import useForm from "../../hooks/useForm";
import { FormContainer } from "./FeedPage.style";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export default function FeedForm() {
 const [form, onChange, clear] = useForm({ title: "", body: "" })
 const [isLoading, setIsLoading] = useState(false)
 const onSubmitForm = (event) =>{
  event.preventDefault()
 }
 return (
  <FormContainer>
   <Card>
    <CardContent>
    <form onSubmit={onSubmitForm}>
     <TextField
      name={"title"}
      value={form.title}
      onChange={onChange}
      label={"Titulo"}
      fullWidth
      margin={"dense"}
      required
      type={"text"}
     />
     <TextField
      name={"body"}
      value={form.body}
      onChange={onChange}
      label={"Conteúdo"}
      fullWidth
      margin={"dense"}
      required
      type={"text"}
     />
    <Button
     type={"submit"}
     fullWidth
     variant={'contained'}
     color={"primary"}
    >{isLoading ? <CircularProgress color='inherit' size={24} /> : <>Criar Post</>}</Button>
    </form>
    </CardContent>
   </Card>
  </FormContainer>
 )
}