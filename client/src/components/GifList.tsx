import { useState, useEffect } from 'react'
import { Gif } from '../domain/Gif'
import './GifList.css'
import { gifService } from '../domain/GifService'

export const GifList = () => {
  const [gifs, setGifs] = useState<Gif[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const getGifs = async () => {
    setIsLoading(true)
    const gifs = await gifService.getGifs()
    setGifs(gifs)
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
