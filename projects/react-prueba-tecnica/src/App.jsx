import { useEffect, useState } from "react"
import './app.css'
export const App = () => {
  const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
  const [fact, setFact] = useState()
  const [imgUrl, setImgUrl] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  useEffect(() => {
    if (!fact) return
    const threefirstword = fact.split(' ', 3).join(' ')
    const Url = `https://cataas.com/cat/says/${threefirstword}?fontSize=50&fontColor=red`
    setImgUrl(Url)
  }, [fact])

  return (
    <>
      <h1>hola Mundo</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imgUrl && <img src={imgUrl} alt={`image extracted using the first three words for ${fact}`} />}
      </section>
    </>
  )
}