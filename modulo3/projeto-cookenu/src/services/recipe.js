import * as axios from 'axios';
import { BASE_URL } from "../constants/urls"


export const createRecipe = (body, clear, setIsLoading) => {
  setIsLoading(true)
  axios.post(`${BASE_URL}/recipe`, body, {
    headers: {
      Authorization: localStorage.getItem("token")
    }
  })
    .then(function (res) {
      alert(res.data.message)
      clear()
      setIsLoading(false)
    })
    .cacth(function (err) {
      alert("erro ao criar receita")
      setIsLoading(false)
    })
}
