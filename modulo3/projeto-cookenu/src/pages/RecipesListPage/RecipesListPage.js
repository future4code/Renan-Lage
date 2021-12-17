import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';
import RecipeCard from '../../componets/RecipeCard/RecipeCard';
import { RecipeListContainer, AddRecipeButton } from './RecipesListPage.style';
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/urls'
import AddIcon from '@mui/icons-material/Add';

export default function RecipesListPage() {
 useProtectedPage()
 const recipes = useRequestData([], `${BASE_URL}/recipe/feed`)

 const recipesCards = recipes.map((recipe) => {
  return (
   <RecipeCard
    key={recipe.recipe_id}
    image={recipe.image}
    title={recipe.title}
    onClick={() => null}
   />)
 })
 return (
  <RecipeListContainer>
   {recipesCards}
   <AddRecipeButton
   color={'primary'}>
    <AddIcon />
   </AddRecipeButton>
  </RecipeListContainer>
 )
}