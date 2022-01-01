import Button from '@mui/material/Button';
import React from "react";
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import { ScreenContainer, SignUpButtonContainer } from "./LoginPage.style";
import { goToSignUp } from '../../routes/coordinator';
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import Typography from '@mui/material/Typography';

export default function LoginPage() {
 useUnprotectedPage()
 const history = useNavigate()

 return (
  <ScreenContainer>
    <Typography color="primary" variant="h4" component="div" gutterBottom>Login</Typography>
   <LoginForm />
   <SignUpButtonContainer>
    <Button
     onClick={() => goToSignUp(history)}
     type={"submit"}
     fullWidth
     variant={"contained"}
     color={"primary"}
    >Cadastre-se</Button>
   </SignUpButtonContainer>
  </ScreenContainer>
 )
}