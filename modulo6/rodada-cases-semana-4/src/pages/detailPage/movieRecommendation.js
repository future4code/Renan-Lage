import React from "react";
import { convertDate } from "../../functions/convertDate";
import { CardText, CardRecommendation } from "./styled";

export function MovieRecommendation(props) {
 return (
  <CardRecommendation >
   <img onClick={props.onClick} src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} alt={`Imagem de ${props.movie.title}`} />
   <CardText>
    <p>{props.movie.title}</p>
    <p>{convertDate(props.movie.release_date, 0)}</p>
   </CardText>
  </CardRecommendation>
 )
}