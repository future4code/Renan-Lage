import React from 'react'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import { StyledToolbar } from './Header.style'
import { goToRecipesList, goToLogin } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'

export default function Header({loginButton, setLoginButton}) {
 const history = useNavigate()
 const token = localStorage.getItem("token")

 const logOut = () => {
  localStorage.removeItem("token")
 }

 const loginButtonAction = () => {
  if (token) {
   logOut()
   setLoginButton("login")
   goToLogin(history)
  } else {
   goToLogin(history) 
  }
 }
 return (
  <AppBar position="static">
   <StyledToolbar>
    <Button onClick={() => goToRecipesList(history)} color="inherit" >Cookenu</Button>
    <Button onClick={loginButtonAction} color="inherit">{loginButton}</Button>
   </StyledToolbar>
  </AppBar>

 );
} 