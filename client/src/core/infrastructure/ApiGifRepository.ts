import { Gif } from '../domain/Gif'
import { GifRepository } from '../domain/GifRepository'

const BASE_URL = 'http://localhost:3000/api/gifs'

const getGifListDetails = async (): Promise<Gif[]> => {
  const response = await fetch(BASE_URL)
  const data = await response.json()
  return data
}

export const apiGifRepository: GifRepository = {
  getGifListDetails,
}
