import { Gif } from './Gif'
import { getGifsDetails } from './GifRepository'

const getGifs = async (): Promise<Gif[]> => {
  return await getGifsDetails()
}

export const gifService = {
  getGifs,
}
