import React, { useState } from "react";
import { GlobalContext } from "./GlobalStateContext";


const GlobalState = (props) => {
 const [moviesList, setMoviesList] = useState([])
 const [movieDetails, setMovieDetails] = useState([])
 const [movieCredits, setMovieCredits] = useState([])
 const [page, setPage] = useState(1)
 const [movieTrailer, setMovieTrailer] = useState([])
 const [recomendedList, setRecomendedList] = useState([])

 const states = {
  moviesList,
  movieDetails,
  movieCredits,
  page,
  movieTrailer,
  recomendedList
 }
 
 const setters = {
  setMoviesList,
  setMovieDetails,
  setMovieCredits,
  setPage,
  setMovieTrailer,
  setRecomendedList
 }
 
 const clears = {

 }

 return (
  <GlobalContext.Provider value={{ states, setters, clears }}>
   {props.children}
  </GlobalContext.Provider>
 );
};

export default GlobalState;