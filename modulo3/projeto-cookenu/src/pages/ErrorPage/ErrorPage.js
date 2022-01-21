import React from "react";
import {ErrorPageContainer, ErrorImage} from './ErrorPage.style'
import error from '../../assets/error.png'
import Typography from '@mui/material/Typography';

export default function ErrorPage() {
 return(
  <ErrorPageContainer>
   <ErrorImage src={error} />
   <Typography variant="h4" color={"primary"} >Erro 404 - Página não encontrada</Typography>
  </ErrorPageContainer>
 )
}