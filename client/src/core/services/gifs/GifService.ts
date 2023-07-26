import { Gif } from '../../domain/Gif'
import { getGifListDetails } from '../../infrastructure/ApiGifRepository'

const getGifs = async (): Promise<Gif[]> => {
  return await getGifListDetails()
}

export const gifService = {
  getGifs,
}
