import { Gif } from './Gif'

const BASE_URL = 'http://localhost:3000/api/gifs'

export const getGifsDetails = async (): Promise<Gif[]> => {
  const response = await fetch(BASE_URL)
  const data = await response.json()
  return data
}
