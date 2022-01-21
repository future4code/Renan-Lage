import Typography from '@mui/material/Typography';
import React from "react";
import useProtectedPage from '../../hooks/useProtectedPage';
import AddRecipeForm from "./AddRecipeForm";
import { ScreenContainer, RecipeContainer } from './AddRecipesPage.styles'

export default function AddRecipesPage() {
 useProtectedPage()
 return (
  <ScreenContainer>
   <RecipeContainer>
    <Typography gutterBottom variant='h4' >Adicionar Receita</Typography>
   </RecipeContainer>
   <AddRecipeForm />
  </ScreenContainer>
 )
}