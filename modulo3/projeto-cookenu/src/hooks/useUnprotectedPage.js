import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { goToRecipesList } from '../routes/coordinator'

export default function useUnprotectedPage() {
 const history = useNavigate()
 useEffect(() => {
  const token = localStorage.getItem('token')
  if (token) {
   goToRecipesList(history)
  }
 }, [history])
}
