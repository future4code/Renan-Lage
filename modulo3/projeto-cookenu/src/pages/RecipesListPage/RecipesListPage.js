import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';

export default function RecipesListPage() {
 useProtectedPage()
 return (
  <div>
   <h1>Todas as Receitas</h1>
  </div>
 )
}