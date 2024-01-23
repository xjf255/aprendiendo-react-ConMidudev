import { useCallback, useRef, useState } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies({ search }) {
  const [responseMovies, setResponseMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previusSearch = useRef(search)

  const getMovies = useCallback(async ({search}) => {
      if (search === previusSearch.current) return
      try {
        setLoading(true)
        previusSearch.current = search
        const newMovies = await searchMovies({ search })
        setResponseMovies(newMovies)
      } catch (error) {
        setError('error feching movies ', error)
      } finally {
        setLoading(false)
      }
    },[])
  return { responseMovies, getMovies, loading }
}