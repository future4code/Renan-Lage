import React from "react";
import { convertDate } from "../../functions/convertDate";
import {
 DivInfo,
 DivText,
 DivTitle,
 DivSubTiltle,
 DivSinopse,
 DivCrew
} from "./styled";

export function MovieInfo(props) {

 return (
  <DivInfo>
   {props.movie.poster_path && <img src={`https://image.tmdb.org/t/p/w300${props.movie.poster_path}`} />}

   <DivText>

    <DivTitle>
     <h2>{props.movie.title && props.movie.title} ({props.movie.release_date && props.movie.release_date.split("-").splice(0, 1)})</h2>
    </DivTitle>

    <DivSubTiltle>
     <p>{props.movie.release_date && convertDate(props.movie.release_date, 1)} (BR) • </p>

     {props.movie.genres && props.movie.genres.map((genre, index) => {
      if (props.movie.genres.length - 1 === index) {
       return <p className="genrePara" key={genre.name}> {`${genre.name} `}</p>
      } else {
       return <p className="genrePara" key={genre.name}> {`${genre.name},`}</p>
      }
     })}

     <p> • {props.movie.runtime} min</p>
    </DivSubTiltle>

    <p className="popularity">Popularidade: {props.movie.popularity}</p>

    <DivSinopse>
     <h2>Sinopse</h2>
     <p>{props.movie.overview && props.movie.overview}</p>
    </DivSinopse>

    <DivCrew>
     {props.credits.crew && props.credits.crew.slice(0, 5).map((crew) => {
      return (
       <div key={crew.name}>
        <h4>{crew.name}</h4>
        <p>{crew.job}</p>
       </div>
      )
     })}
    </DivCrew>

   </DivText>
  </DivInfo>
 )
}