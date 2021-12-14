import { ThemeProvider } from '@emotion/react'
import React, { useState } from 'react'
import Router from './routes/Router'
import theme from './constants/theme'
import Header from './componets/Header/Header'
import { BrowserRouter } from 'react-router-dom'

export default function App() {
  const token = localStorage.getItem("token")
  const [loginButton, setLoginButton] = useState(token ? "logout" : "login")
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header loginButton={loginButton} setLoginButton={setLoginButton} />
        <Router loginButton={loginButton} setLoginButton={setLoginButton} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

