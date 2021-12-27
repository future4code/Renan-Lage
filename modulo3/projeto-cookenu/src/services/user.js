import axios from 'axios';
import { BASE_URL } from '../constants/urls'
import { goToRecipesList } from '../routes/coordinator';

export const login = (body, clear, history, setLoginButton, setIsLoading) => {
  setIsLoading(true)
  axios.post(`${BASE_URL}/user/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token)
      clear()
      setIsLoading(false)
      goToRecipesList(history)
      setLoginButton("logout")
    })
    .catch((err) => {
      alert(err.response.data.message)
      setIsLoading(false)
    })
}

export const signUp = (body, clear, history, setRightButtonText, setIsLoading) => {
  setIsLoading(true)
  axios.post(`${BASE_URL}/user/signup`, body)
      .then((res) => {
          localStorage.setItem("token", res.data.token)
          clear()
          setIsLoading(false)
          goToRecipesList(history)
          setRightButtonText("Logout")
      })
      .catch((err) => {
          setIsLoading(false)
          alert("erro ao criar usuario")
      })
}