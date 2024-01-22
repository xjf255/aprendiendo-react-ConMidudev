const API_KEY = '3f1a788'

export async function searchMovies({ search }) {
    if (search === '') return null

    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&S=${search}`)
        const movies = await response.json()
        return movies?.Search?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster
        }))
    } catch(e){
        throw new Error('Error fetching')
    }
}