import withresults from '../mocks/with-results.json'
import withoutresults from '../mocks/no-results.json'

export function useMovies() {
    const movies = withresults.Search
  
    const mappedMovies = movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.title,
      poster: movie.Poster
    }))
  
    return { movies: mappedMovies }
  }