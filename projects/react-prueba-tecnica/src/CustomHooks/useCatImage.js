import { useState, useEffect } from "react"

export const useCatImage = ({fact}) => {
    const [imgUrl, setImgUrl] = useState()
  
    useEffect(() => {
      if (!fact) return
      const threefirstword = fact.split(' ', 3).join(' ')
      const Url = `https://cataas.com/cat/says/${threefirstword}?fontSize=50&fontColor=red`
      setImgUrl(Url)
    }, [fact])
  
    return { imgUrl }
  }