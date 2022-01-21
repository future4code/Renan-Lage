import Button from '@mui/material/Button';
import React from "react";
import { useNavigate } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import { ScreenContainer, SignUpButtonContainer } from "./SignUpPage.style";
import { goToLogin } from '../../routes/coordinator';
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import Typography from '@mui/material/Typography';


export default function SignUpPage() {
 useUnprotectedPage()
 const history = useNavigate()
 return (
  <ScreenContainer>
   <Typography color="primary" variant="h4" component="div" gutterBottom>Cadastro</Typography>
   <SignUpForm />
   <SignUpButtonContainer>
    <Button
     onClick={() => goToLogin(history)}
     type={"submit"}
     fullWidth
     variant={"contained"}
     color={"primary"}
    >voltar</Button>
   </SignUpButtonContainer>
  </ScreenContainer>
 )
}