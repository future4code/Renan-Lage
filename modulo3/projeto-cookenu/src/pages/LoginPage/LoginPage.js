import Button from '@mui/material/Button';
import React from "react";
import logo from "../../assets/logo.png"
import LoginForm from './LoginForm';
import { ScreenContainer, LogoImage, SignUpButtonContainer } from "./LoginPage.style";
import { goToSignUp } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';
import useUnprotectedPage from "../../hooks/useUnprotectedPage"

export default function LoginPage(setLoginButton) {
 useUnprotectedPage()
 const history = useNavigate()
 return (
  <ScreenContainer>
   <LogoImage src={logo} />
   <LoginForm setLoginButton={setLoginButton} />
   <SignUpButtonContainer>
    <Button
     onClick={() => goToSignUp(history)}
     type={"submit"}
     fullWidth
     variant={"text"}
     color={"primary"}
    >Cadastre-se</Button>
   </SignUpButtonContainer>
  </ScreenContainer>
 )
}