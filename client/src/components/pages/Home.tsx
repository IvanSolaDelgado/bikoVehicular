import { useEffect, useState } from 'react'
import { Gif } from '../../domain/Gif'
import { gifService } from '../../domain/GifService'
import { GifList } from '../GifList'
import { Navbar } from '../Navbar'
import { Searchbar } from '../Searchbar'
import './Home.css'

export const Home = () => {
  const [gifs, setGifs] = useState<Gif[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [filteredGifs, setFilteredGifs] = useState<Gif[]>([])

  const getGifs = async () => {
    setIsLoading(true)

    const gifs = await gifService.getGifs()
    setGifs(gifs)

    setIsLoading(false)
  }

  useEffect(() => {
    getGifs()
  }, [])

  useEffect(() => {
    setFilteredGifs(gifs)
  }, [gifs])

  const filterGifs = (query: string) => {
    const filterGifs = gifs.filter((gif) =>
      gif.name.toLowerCase().includes(query.toLowerCase()),
    )

    setFilteredGifs(filterGifs)
  }

  if (isLoading) return <p>Loading...</p>

  if (gifs.length === 0) return <p>Sorry, gifs not found :/</p>

  return (
    <section className="home-container">
      <section>
        <header>
          <Navbar />
          <Searchbar handleOnClick={filterGifs} />
        </header>
        <main>
          <GifList gifs={filteredGifs} />
        </main>
      </section>
    </section>
  )
}
