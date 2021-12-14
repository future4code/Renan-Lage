import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";

export default function RecipesDetailPage() {
 useProtectedPage()
 return(
  <div>
   <h1>Detalhe da receita</h1>
  </div>
 )
}