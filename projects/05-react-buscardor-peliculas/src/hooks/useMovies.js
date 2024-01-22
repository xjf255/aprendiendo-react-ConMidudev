import { useState } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies({ search }) {
  const [responseMovies, setResponseMovies] = useState([])
  const getMovies = async () => {
    try {
      const newMovies = await  searchMovies({ search })
      setResponseMovies(newMovies)
    } catch (error) {
      throw new Error('error feching movies ',error)
    }
  }
  return { responseMovies, getMovies }
}