import axios from "axios"
import { URL_BASE, API_KEY } from "../constants/url"

export const getPopularMovies = (setMoviesList, page) => {

 axios.get(`${URL_BASE}popular?${API_KEY}&language=pt-BR&page=${page}`)
  .then((res) => {
   setMoviesList(res.data.results)
  })
  .catch((error) => {
   console.log(error.message)
  })
}

export const getMovieDetails = (setMoviesDetail, id) => {

 axios.get(`${URL_BASE}${id}?${API_KEY}&language=pt-BR&`)
  .then((resp) => {
   setMoviesDetail(resp.data)
  })
  .catch((error) => {
   console.log(error.message)
  })
}

export const getMovieCredits = (setMovieCredits, id) => {

 axios.get(`${URL_BASE}${id}/credits?${API_KEY}&language=pt-BR`)
  .then((resp) => {
   setMovieCredits(resp.data)
  })
  .catch((error) => {
   console.log(error.message)
  })
}

export const getMovieTrailer = (setMovieTrailer, id) => {

 axios.get(`${URL_BASE}${id}/videos?${API_KEY}&language=pt-BR`)
  .then((resp) => {
   const trailer = resp.data.results.filter((video) => {
    if (video.type === "Trailer") {
     return video
    }
   })
   setMovieTrailer(trailer)
  })
  .catch((error) => {
   console.log(error.message)
  })
}

export const getMovieRecommendList = (setMovieRecommendList, id) => {

 axios.get(`${URL_BASE}${id}/recommendations?${API_KEY}&language=pt-BR`)
  .then((resp) => {
   setMovieRecommendList(resp.data.results)
  })
  .catch((error) => {
   console.log(error.message)
  })
}