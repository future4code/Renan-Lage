import React from "react";
import {
 DivInfo,
 DivImg,
 DivText,
 DivTitle,
 DivSubTiltle,
 DivDate,
 DivGenre,
 DivTime,
 DivPop,
 DivSinopse,
 DivCrew,
 DivJob
} from "./styled";

export const MovieInfo = (props) => {

 return (
  <DivInfo>
     {console.log(props.movie)}
   <DivImg>
    {props.movie.poster_path && <img src={`https://image.tmdb.org/t/p/w300${props.movie.poster_path}`} />}
   </DivImg>

   <DivText>

    <DivTitle>
     <h2>{props.movie.title && props.movie.title}</h2>
     <h2>({props.movie.release_date && props.movie.release_date.split("-").splice(0, 1)})</h2>
    </DivTitle>

    <DivSubTiltle>
     <DivDate>
      <p>{props.movie.release_date} (BR) </p>
     </DivDate>

     <DivGenre>
      {props.movie.genres && props.movie.genres.map((genre) => {
       return <p key={genre.name}> {genre.name}</p>
      })}
     </DivGenre>

     <DivTime>
      <p>{props.movie.runtime}</p>
     </DivTime>
    </DivSubTiltle>

    <DivPop>
     <p className="section-3_child1"> popularidade: </p>
     <p className="section-3_child2"><ion-icon name="pulse-outline" />{props.movie.popularity}</p>
    </DivPop>

    <DivSinopse>
     <h3>Sinopse</h3>
     <p>{props.movie.overview && props.movie.overview}</p>
    </DivSinopse>

    <DivCrew>
     {props.movie.crew && props.movie.crew.slice(0, 5).map((crew) => {
      return (
       <DivJob key={crew.name}>
        <p>{crew.name}</p>
        <p>{crew.job}</p>
       </DivJob>
      )
     })}
    </DivCrew>

   </DivText>
  </DivInfo>
 )
}