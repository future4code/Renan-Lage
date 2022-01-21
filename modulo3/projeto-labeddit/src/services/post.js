import axios from "axios";
import { BASE_URL, headers } from "../constants/urls"

export const getPosts = (setPosts) => {
 axios.get(`${BASE_URL}/posts?&size=500000000`, headers)
  .then((res) => {
   setPosts(res.data)
  })
  .catch((err) => {
   alert(err.response.data)
  })
}

export const createPost = (body, setIsLoading, clear) => {
 setIsLoading(true)
 axios.post(`${BASE_URL}/posts`, body, headers)
  .then((res) => {
   alert(res.data)
   clear()
   setIsLoading(false)
  })
  .catch((err) => {
   console.log(err.response.data)
   clear()
   setIsLoading(false)
  })
}