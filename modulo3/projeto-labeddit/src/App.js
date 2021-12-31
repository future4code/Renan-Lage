import React from 'react'
import Router from './routes/router';
import theme from './constants/theme'
import { ThemeProvider } from '@emotion/react'
import Header from "./components/header/Header"
import { BrowserRouter, Routes } from 'react-router-dom';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}
