import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import {
 DivMain,
 DivHeader,
 Img,
 StyledMenu,
 DivButtons,
 LabelButton,
 SpanButton,
 DivMovie,
 DivFooter
} from "./styled"
import logoImg from '../../assets/logo.svg'
import { GlobalContext } from '../../contexts/GlobalStateContext'
import { getPopularMovies } from "../../services/movies";
import { goToMovieDetails } from "../../routes/coordinator";
import { CardMovieHome } from "./cardMovie";

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

 const { states, setters } = useContext(GlobalContext)

 const history = useNavigate()

 useEffect(() => {
  getPopularMovies(setters.setMoviesList, states.page)
 }, [setters.setMoviesList, states.page])

 const menuText = () => {
  if (states.page === 1) {
   return (<DivFooter>
    <p className="actual-text">
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
    <p className="actual-text">
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
  window.scrollTo(0, 0)
 }

 const changeToDetail = (movie) => {
  goToMovieDetails(history, movie.id)
  window.scrollTo(0, 0)
 }

 return (
  <DivMain>
   <DivHeader>
    <Img src={logoImg}
    />
   </DivHeader>
   <StyledMenu>
     <p className="title">
      Milhões de filmes, séries e pessoas para descobrir. Explore Já.
     </p>
     <p className="filter">Filtre por:</p>
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
      <CardMovieHome
       key={movie.id}
       movie={movie}
       onClick={() => changeToDetail(movie)}
      />
     )
    })}
   </DivMovie>
   {menuText()}
  </DivMain>
 )
}