import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import debounce from 'just-debounce-it'

function useSearch() {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('No se puede buscar una película vacía')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número')
      return
    }

    if (search.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error }
}

function App() {
  const { search, updateSearch, error } = useSearch()
  const { responseMovies, getMovies, loading } = useMovies({ search })

  const debounceGetMovies = useCallback(
    debounce(search => {
      getMovies({ search })
    }, 500)
    , []
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies({ search })
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debounceGetMovies(newSearch)
  }

  return (
    <>
      <header>
        <h1>Prueba Tecnica</h1>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} placeholder='Avengers, Star Wars, the Matrix...' />
          <button>Buscar</button>
        </form>
        {error && <p>{error}</p>}
      </header>
      <main>
        {loading ? <p>Cargando...</p> : <Movies movies={responseMovies} />}
      </main>
    </>
  )
}

export default App
