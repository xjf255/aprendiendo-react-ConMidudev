import { useCatImage } from "./CustomHooks/useCatImage"
import { useCatFact } from "./CustomHooks/useCatFact"
import './app.css'

export const App = () => {
  const {fact, refreshFact} = useCatFact()
  const { imgUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }
  return (
    <>
      <h1>hola Mundo</h1>

      <button onClick={handleClick}>reload</button>
      <section>
        {fact && <p>{fact}</p>}
        {imgUrl && <img src={imgUrl} alt={`image extracted using the first three words for ${fact}`} />}
      </section>
    </>
  )
}