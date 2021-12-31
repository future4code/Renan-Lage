import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { goToFeed } from '../routes/coordinator'

const useUnprotectedPage = () => {
 const history = useNavigate()
 useEffect(() => {
  const token = localStorage.getItem('token')
  if (token) {
   goToFeed(history)
  }
 }, [history])
}

export default useUnprotectedPage
