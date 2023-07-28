import { Gif } from '../../domain/Gif'
import { apiGifRepository } from '../../infrastructure/ApiGifRepository'

const getGifs = async (): Promise<Gif[]> => {
  return await apiGifRepository.getGifListDetails()
}

export const gifService = {
  getGifs,
}
