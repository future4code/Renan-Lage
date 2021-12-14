import React from "react";
import useProtectedPage from '../../hooks/useProtectedPage';

export default function AddRecipesPage() {
 useProtectedPage()
 return(
  <div>
   <h1>Adicionar Receita</h1>
  </div>
 )
}