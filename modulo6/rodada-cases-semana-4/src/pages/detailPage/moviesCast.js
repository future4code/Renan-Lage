import React from "react";
import { CardText, CardCaststyle } from "./styled";

export function MovieCast(props) {
 return (
  <CardCaststyle>
   <img src={`https://image.tmdb.org/t/p/w500${props.cast.profile_path}`} alt={`Imagem de ${props.cast.name}`} />
   <CardText>
    <p>{props.cast.name}</p>
    <p>{props.cast.character}</p>
   </CardText>
  </CardCaststyle>
 )
}