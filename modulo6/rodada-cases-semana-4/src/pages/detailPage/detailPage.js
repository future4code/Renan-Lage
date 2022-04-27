import React, { useContext, useEffect } from "react";
import { DivHeader, DivMain, Img, DivInfo, StyledMenuNames } from "./styled";
import logoImg from '../../assets/logo.svg'
import { useNavigate } from "react-router-dom";
import { GlobalContext } from '../../contexts/GlobalStateContext'
import { getMovieCredits } from "../../services/movies";
import { MovieInfo } from "./movieInfo";


export const PageDetails = () => {

 const history = useNavigate()

 const { states, setters, clears } = useContext(GlobalContext)

 useEffect(() => {
  getMovieCredits(setters.setMovieCredits, states.movieDetails.id)
  // getMovieCredits(set_movieCredits, id)
  // getMovieVideos(set_movieVideos, id)
  // getMovieList(set_movieRecomendedList, id)
 }, [])


 return (
  <DivMain>
   <DivHeader>
    <Img src={logoImg}
    />
   </DivHeader>
   <MovieInfo
   movie={states.movieDetails}
   />

  </DivMain>
 )
}