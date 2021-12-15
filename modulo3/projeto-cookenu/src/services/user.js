import axios from 'axios';
import { BASE_URL } from '../constants/urls'
import { goToRecipesList } from '../routes/coordinator';

export const login = (body, clear, history, setLoginButton) => {
 axios.post(`${BASE_URL}/user/login`, body)
  .then((res) => {
   localStorage.setItem("token", res.data.token)
   clear()
   goToRecipesList(history)
   setLoginButton("logout")
  })
  .catch((err) => {
    alert(err.response.data.message)
  })
}

export const signUp = (body, clear, history, setLoginButton) => {
  axios.post(`${BASE_URL}/user/signup`, body)
   .then((res) => {
    localStorage.setItem("token", res.data.token)
    clear()
    goToRecipesList(history)
    setLoginButton("logout")
   })
   .catch((err) => {
    alert(err.response.data.message)
   })
 }