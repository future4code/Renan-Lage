import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';
import RecipeCard from '../../componets/RecipeCard/RecipeCard';
import { RecipeListContainer, AddRecipeButton } from './RecipesListPage.style';
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/urls'
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import { goToRecipeDetails, goToAddRecipe } from '../../routes/coordinator'
import Loading from "../../componets/Loading/Loading"

export default function RecipesListPage() {
  useProtectedPage()
  const history = useNavigate()
  const recipes = useRequestData([], `${BASE_URL}/recipe/feed`)

  const onClickCard = (id) => {
    goToRecipeDetails(history, id)
  }
  const recipesCards = recipes.map((recipe) => {
    return (
      <RecipeCard
        key={recipe.recipe_id}
        image={recipe.image}
        title={recipe.title}
        onClick={() => onClickCard(recipe.recipe_id)}
      />)
  })
  return (
    <RecipeListContainer>
      {recipesCards.length > 0 ? recipesCards : <Loading/>}
      <AddRecipeButton
      onClick={()=> goToAddRecipe(history)}
        color={'primary'}>
        <AddIcon />
      </AddRecipeButton>
    </RecipeListContainer>
  )
}