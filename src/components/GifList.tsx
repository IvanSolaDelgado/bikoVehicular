import { useState, useEffect } from 'react'
import { Gif } from '../types/interface'
import './GifList.css'

export const GifList = () => {
  const [gifs, setGifs] = useState<Gif[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const getGifs = async () => {
    setIsLoading(true)
    const response = await fetch('http://localhost:3000/api/gifs')
    const data = await response.json()
    setGifs(data)
    setIsLoading(false)
  }

  useEffect(() => {
    getGifs()
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (gifs.length === 0) return <p>Sorry, gifs not found :/</p>

  return (
    <div className="gifs">
      {gifs.map((gif, index) => (
        <img className="gif" src={gif.imgUrl} alt={gif.name} key={index} />
      ))}
    </div>
  )
}
