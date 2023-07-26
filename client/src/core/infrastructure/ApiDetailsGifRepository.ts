import { Gif } from '../domain/Gif'

export const getGifsDetails = async (gifId: string): Promise<Gif> => {
  const BASE_URL = `http://localhost:3000/api/gif/${gifId}`
  const response = await fetch(BASE_URL)
  const data = await response.json()
  return data
}
