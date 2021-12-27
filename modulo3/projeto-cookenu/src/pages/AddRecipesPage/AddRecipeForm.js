import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import { InputsContainer, AddRecipeFormContainer } from './AddRecipesPage.styles'
import useForm from '../../hooks/useForm'
import { createRecipe } from '../../services/recipe'
import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export default function AddRecipeForm() {
 useProtectedPage()
 const [form, onChange, clear] = useForm({ title: "", description: "", image: "" })
 const [isLoading, setIsLoading] = useState(false)


 const onSubmitForm = (event) => {
  event.preventDefault()
  createRecipe(form, clear, setIsLoading)
 }
 
 return (
  <form onSubmit={onSubmitForm}>
   <AddRecipeFormContainer>
    <InputsContainer>
     <TextField
      name='title'
      value={form.title}
      onChange={onChange}
      label="Título"
      variant="outlined"
      fullWidth
      required
      autoFocus
      margin='normal'
     />
     <TextField
      name='description'
      value={form.description}
      onChange={onChange}
      label="Descrição"
      variant="outlined"
      fullWidth
      required
      autoFocus
      margin='normal'
     />
     <TextField
      name='image'
      value={form.image}
      onChange={onChange}
      label="Foto"
      variant="outlined"
      fullWidth
      required
      autoFocus
      margin='normal'
     />
     <Button
      color='primary'
      variant='contained'
      type='submit'
      fullWidth
     >
      {isLoading? <CircularProgress color='inherit' size={24}/> :<>Criar Receita</>}
     </Button>
    </InputsContainer>
   </AddRecipeFormContainer>
  </form>
 )
}