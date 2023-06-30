import { useState, useEffect } from 'react'
import { Gif } from '../domain/Gif'
import './GifList.css'
import { gifService } from '../domain/GifService'
import arrow from '../assets/Arrow 1.svg'

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
    <>
      <header className="header-container">
        <img className="header-arrow" src={arrow} alt="Diagonal blue arrow " />
        <h2 className="header-title">Los gifs más trendings del momento</h2>
      </header>
      <div className="gifs-container">
        {gifs.map((gif, index) => (
          <img className="gif" src={gif.imgUrl} alt={gif.name} key={index} />
        ))}
      </div>
    </>
  )
}
