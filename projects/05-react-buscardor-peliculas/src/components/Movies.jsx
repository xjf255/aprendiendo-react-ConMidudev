const RenderMovie = ({ movies }) => {
    return (
        movies.map(movie => (
            <li key={movie.id}>
                <h3>{movie.title}</h3>
                <p>{movie.year}</p>
                <img src={movie.poster} alt="" />
            </li>
        ))
    )
}

const RenderNoResult = () => {
    return (
        <p>No se encontraron peliculas para esta busqueda</p>
    )
}

export const Movies = ({ movies }) => {
  const hasmovies = movies?.length > 0
    return (
        <ul>
            {
                hasmovies ? <RenderMovie movies={movies} /> : <RenderNoResult />
            }
        </ul>
    )
}