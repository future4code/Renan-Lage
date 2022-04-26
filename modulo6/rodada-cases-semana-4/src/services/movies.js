import axios from "axios"
import { URL_BASE, API_KEY } from "../constants/url"

export const getPopularMovies = (set_data, page) => {

 axios.get(`${URL_BASE}popular?${API_KEY}&language=pt-BR&page=${page}`)
  .then((res) => {
   set_data(res.data.results)
  })
  .catch((error) => {
   console.log(error.message)
  })
}

export const getMovieDetailts = (set_data, id) => {

 axios.get(`${URL_BASE}${id}?${API_KEY}&language=pt-BR&page=1`)
  .then((resp) => {
   set_data(resp.data)
  })
  .catch((error) => {
   console.log(error.message)
  })
}

export const getMovieCredits = (set_data, id) => {

 axios.get(`${URL_BASE}${id}/credits?${API_KEY}&language=pt-BR`)
  .then((resp) => {
   set_data(resp.data)
  })
  .catch((error) => {
   console.log(error.message)
  })
}

export const getMovieVideos = (set_data, id) => {

 axios.get(`${URL_BASE}${id}/videos?${API_KEY}&language=pt-BR`)
  .then((resp) => {
   const trailer = resp.data.results.filter((video) => {
    if (video.type === "Trailer") {
     return video
    }
   })
   set_data(trailer)
  })
  .catch((error) => {
   console.log(error.message)
  })
}

export const getMovieList = (set_data, id) => {

 axios.get(`${URL_BASE}${id}/recommendations?${API_KEY}&language=pt-BR`)
  .then((resp) => {
   set_data(resp.data.results)
  })
  .catch((error) => {
   console.log(error.message)
  })
}