import { Gif } from '../../domain/Gif'
import { getGifsDetails } from '../../infrastructure/ApiGifRepository'

const getGifs = async (): Promise<Gif[]> => {
  return await getGifsDetails()
}

export const gifService = {
  getGifs,
}
