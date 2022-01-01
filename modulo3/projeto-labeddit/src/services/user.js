import { clear } from "@testing-library/user-event/dist/clear";
import axios from "axios";
import { BASE_URL } from "../constants/urls"
import { goToFeed } from "../routes/coordinator";

export const login = (body, clear, history, setIsLoading) => {
 setIsLoading(true)
 axios.post(`${BASE_URL}/users/login`, body)
  .then((res) => {
   localStorage.setItem('token', res.data.token)
   clear()
   setIsLoading(false)
   goToFeed(history)
  })
  .catch((err) => {
   alert(err.response.data)
   setIsLoading(false)
  })
}

export const signUp = (body, clear, history, setIsLoading) => {
 setIsLoading(true)
 axios.post(`${BASE_URL}/users/signup`, body)
  .then((res) => {
   localStorage.setItem("token", res.data.token)
   clear()
   setIsLoading(false)
   goToFeed(history)
  })
  .catch((err) => {
   alert(err.response.data)
  })
}