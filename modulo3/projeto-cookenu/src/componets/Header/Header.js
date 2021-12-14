import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { StyledToolbar } from './Header.style'
import { goToRecipesList, goToLogin } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom';

export default function Header() {
 const history = useNavigate()
 return (
  <AppBar position="static">
   <StyledToolbar>
    <Button onClick={() => goToRecipesList(history)} color="inherit" >Cookenu</Button>
    <Button onClick={() => goToLogin(history)} color="inherit">Login</Button>
   </StyledToolbar>
  </AppBar>

 );
} 