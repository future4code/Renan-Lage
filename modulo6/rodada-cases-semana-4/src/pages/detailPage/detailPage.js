import React, { useContext, useEffect } from "react";
import {
 RecommendationContainer,
 CastContainer,
 DivHeader,
 DivMain,
 Img,
 Trailer
} from "./styled";
import logoImg from '../../assets/logo.svg'
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from '../../contexts/GlobalStateContext'
import {
 getMovieCredits,
 getMovieTrailer,
 getMovieRecommendList,
 getMovieDetails
} from "../../services/movies";
import { MovieInfo } from "./movieInfo";
import { MovieCast } from "./moviesCast";
import { MovieRecommendation } from "./movieRecommendation";
import { goToHomePage, goToMovieDetails } from "../../routes/coordinator";

export function PageDetails() {

 const history = useNavigate()
 const { id } = useParams()

 const { states, setters, clears } = useContext(GlobalContext)

 useEffect(() => {
  getMovieDetails(setters.setMovieDetails, id)
  getMovieCredits(setters.setMovieCredits, id)
  getMovieTrailer(setters.setMovieTrailer, id)
  getMovieRecommendList(setters.setRecomendedList, id)
 }, [id])

 const renderTrailer = (trailer) => {
  return (
   <Trailer
    width="560"
    height="315"
    src={`https://www.youtube.com/embed/${trailer.key}`}
    title={`${trailer.name}`}
   ></Trailer>
  )
 }

 const changeToDetail = (movie) => {
  goToMovieDetails(history, movie.id)
  window.scrollTo(0, 0)
 }

 return (
  <DivMain>
   <DivHeader>
    <Img
     src={logoImg}
     onClick={() => goToHomePage(history)}
    />
   </DivHeader>
   <MovieInfo
    movie={states.movieDetails}
    credits={states.movieCredits}
   />
   <h2 className="title">Elenco original</h2>
   <CastContainer>
    {states.movieCredits.cast && states.movieCredits.cast.map((cast) => {
     return <MovieCast key={cast.name} cast={cast} />
    })}
   </CastContainer>
   <h2 className="title">Trailer</h2>
   {states.movieTrailer[0] && renderTrailer(states.movieTrailer[0])}
   <h2 className="title">Recomendações</h2>
   <RecommendationContainer>
    {states.recomendedList && states.recomendedList.map((movie) => {
     return <MovieRecommendation
      key={movie.title}
      movie={movie}
      onClick={() => changeToDetail(movie)}
     />
    })}
   </RecommendationContainer>
  </DivMain>
 )
}