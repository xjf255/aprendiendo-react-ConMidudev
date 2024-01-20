import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App() {
  const { movies: mappedMovies } = useMovies()

  return (
    <>
      <header>
        <h1>Prueba Tecnica</h1>
        <form>
          <input placeholder='Avengers, Star Wars, the Matrix...' />
          <button>Buscar</button>
        </form>
      </header>
      <main>
        <Movies movies={mappedMovies} />
      </main>
    </>
  )
}

export default App
