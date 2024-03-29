import { Gif } from '../domain/Gif'

const BASE_URL = 'http://localhost:3000/api/gifs'

export const getGifListDetails = async (): Promise<Gif[]> => {
  const response = await fetch(BASE_URL)
  const data = await response.json()
  return data
}
