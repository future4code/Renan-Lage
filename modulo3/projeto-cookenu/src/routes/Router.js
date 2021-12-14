import React from "react";
import { Route, Routes } from "react-router-dom"
import AddRecipesPage from '../pages/AddRecipesPage/AddRecipesPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import RecipesDetailPage from '../pages/RecipesDetailPage/RecipesDetailPage'
import RecipesListPage from '../pages/RecipesListPage/RecipesListPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import ErrorPage from "../pages/ErrorPage/ErrorPage"

export default function Router({loginButton, setLoginButton}) {
 return (
  
   <Routes>
    <Route path={'/login'} element={<LoginPage setLoginButton={setLoginButton} />} />
    <Route path={'/cadastro'} element={<SignUpPage setLoginButton={setLoginButton} />} />
    <Route path={'/'} element={<RecipesListPage />} />
    <Route path={'/adicionar-receita'} element={<AddRecipesPage />} />
    <Route path={'/detalhe/:id'} element={<RecipesDetailPage />} />
    <Route path={'*'} element={<ErrorPage />} />
   </Routes>
 )
}