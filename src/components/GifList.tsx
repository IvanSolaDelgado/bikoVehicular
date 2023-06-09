import { useState, useEffect } from 'react'
import { Gif } from '../types/interface'
import './GifList.css'

export const GifList = () => {
  const [gifs, setGifs] = useState<Gif[]>([])
  const getGifs = async () => {
    const response = await fetch('http://localhost:3000/api/gifs')
    const data = await response.json()
    setGifs(data)
  }

  useEffect(() => {
    getGifs()
  }, [])

  return (
    <div className="gifs">
      {gifs.map((gif, index) => (
        <img className="gif" src={gif.imgUrl} alt={gif.name} key={index} />
      ))}
    </div>
  )
}
