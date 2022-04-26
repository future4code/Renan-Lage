import React, { useContext, useEffect } from "react";
import {
 DivMain,
 DivHeader,
 Img,
 StyledMenu,
 DivText,
 DivFilter,
 DivButtons,
 LabelButton,
 SpanButton,
 MovieCard,
 DivMovie,
 ImgCard,
 TextCard
} from "./styled"
import logoImg from '../../assets/logo.svg'
import Typography from '@mui/material/Typography';
import { GlobalContext } from '../../contexts/GlobalStateContext'
import { getPopularMovies } from "../../services/movies";


export default function HomePage() {
 const buttonsName = [
  "Ação",
  "Aventura",
  "Animação",
  "Comédia",
  "Crime",
  "Documentário",
  "Drama",
  "Família",
  "Faroeste",
  "Fantasia",
  "Guerra",
  "História",
  "Terror",
  "Música",
  "Mistério",
  "Romance",
  "Ficção Científica",
  "Cinema TV",
  "Thriller",
 ]

 const { states, setters, clears } = useContext(GlobalContext)

 useEffect(() => {
  getPopularMovies(setters.setMoviesList, states.pages)
  console.log(states.moviesList)
 }, [states.pages])

 return (
  <DivMain>
   <DivHeader>
    <Img src={logoImg}
    />
   </DivHeader>
   <StyledMenu>

    <DivText>
     <Typography color={"white"} variant="h5">
      Milhões de filmes, séries e pessoas para descobrir. Explore Já.
     </Typography>
    </DivText>

    <DivFilter>
     <Typography color={"white"} variant="h6" >Filtre por:</Typography>
    </DivFilter>

    <DivButtons>
     {buttonsName.map((but) => {
      return (
       <LabelButton
        key={but}
       >
        <SpanButton>
         {but}
        </SpanButton>
       </LabelButton>
      )
     })}
    </DivButtons>
   </StyledMenu>
   <DivMovie>
    {states.moviesList && states.moviesList.map((movie) => {
     return (
      <MovieCard key={movie.id} >
       <ImgCard src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
       <TextCard>
        <Typography sx={{fontWeight:"bold"}} >{movie.title}</Typography>
        <Typography>{movie.release_date}</Typography>
       </TextCard>
      </MovieCard>
     )
    })}
   </DivMovie>

  </DivMain>
 )
}