import { useEffect, useState } from 'react'
import { Gif } from '../../domain/Gif'
import { gifService } from '../../domain/GifService'
import { GifList } from '../GifList'
import { Navbar } from '../Navbar'
import { Searchbar } from '../Searchbar'
import './Home.css'

export const Home = () => {
  const [query, setQuery] = useState('')
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
    <section className="home-container">
      <section>
        <header>
          <Navbar />
          <Searchbar query={query} setQuery={setQuery} />
        </header>
        <main>
          <GifList gifs={gifs} />
        </main>
      </section>
    </section>
  )
}
