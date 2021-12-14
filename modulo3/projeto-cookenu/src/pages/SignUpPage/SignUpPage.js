import React from "react";
import logo from "../../assets/logo.png"
import SignUpForm from './SignUpForm';
import { ScreenContainer, LogoImage } from "./SignUpPage.style";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

export default function SignUpPage(setLoginButton) {
  useUnprotectedPage()
  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <SignUpForm setLoginButton={setLoginButton} />
    </ScreenContainer>
  )
}