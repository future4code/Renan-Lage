import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom"
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
 TextCard,
 DivFooter
} from "./styled"
import logoImg from '../../assets/logo.svg'
import Typography from '@mui/material/Typography';
import { GlobalContext } from '../../contexts/GlobalStateContext'
import { getPopularMovies } from "../../services/movies";
import { goToMovieDetails } from "../../routes/coordinator";

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

 const history = useNavigate()

 useEffect(() => {
  getPopularMovies(setters.setMoviesList, states.page)
 }, [states.page])

 const menuText = () => {
  if (states.page === 1) {
   return (<DivFooter>
    <p className="menu-text">
     {states.page}
    </p>
    <p onClick={() => changePage(states.page + 1)} value={states.page} className="menu-text">
     {states.page + 1}
    </p>
    <p onClick={() => changePage(states.page + 2)} className="menu-text">
     {states.page + 2}
    </p>
    <p onClick={() => changePage(states.page + 3)} className="menu-text">
     {states.page + 3}
    </p>
    <p onClick={() => changePage(states.page + 4)} className="menu-text">
     {states.page + 4}
    </p>
   </DivFooter>
   )
  } else {
   return (<DivFooter>
    <p onClick={() => changePage(states.page - 1)} className="menu-text">
     {states.page - 1}
    </p>
    <p className="menu-text">
     {states.page}
    </p>
    <p onClick={() => changePage(states.page + 1)} className="menu-text">
     {states.page + 1}
    </p>
    <p onClick={() => changePage(states.page + 2)} className="menu-text">
     {states.page + 2}
    </p>
    <p onClick={() => changePage(states.page + 3)} className="menu-text">
     {states.page + 3}
    </p>
   </DivFooter>
   )
  }
 }

 const changePage = (index) => {
  setters.setPage(index)
 }

 const changeToDetail = (movie) => {
  setters.setMovieDetails(movie)
  goToMovieDetails(history)
 }

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
      <MovieCard onClick={() => changeToDetail(movie)} key={movie.id} >
       <ImgCard src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
       <TextCard>
        <Typography sx={{ fontWeight: "bold" }} >{movie.title}</Typography>
        <Typography>{movie.release_date}</Typography>
       </TextCard>
      </MovieCard>
     )
    })}
   </DivMovie>
   {menuText()}
  </DivMain>
 )
}