import { useEffect, useState } from 'react'
import { Gif } from '../../../core/domain/Gif'
import { gifService } from '../../../core/services/gifs/GifService'
import { Home } from './Home'

export const HomeController = () => {
  const [gifs, setGifs] = useState<Gif[] | undefined>(undefined)
  const [query, setQuery] = useState('')

  const getGifs = async () => {
    const gifs = await gifService.getGifs()
    setGifs(gifs)
  }

  useEffect(() => {
    getGifs()
  }, [])

  const calculateGifs = () => {
    return gifs?.filter((gif) =>
      gif.name.toLowerCase().includes(query.toLowerCase()),
    )
  }

  const clearQueryWhenIsEmpty = (query: string) => {
    if (query.length !== 0) {
      return
    }

    setQuery('')
  }

  return (
    <Home
      gifs={calculateGifs()}
      onFilterGifs={setQuery}
      onQueryChange={clearQueryWhenIsEmpty}
    />
  )
}
