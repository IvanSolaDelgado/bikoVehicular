import { Gif } from '../../domain/Gif'
import { getGifsDetails } from '../../infrastructure/ApiDetailsGifRepository'

const getDetails = async (gifId: string): Promise<Gif> => {
  return await getGifsDetails(gifId)
}

export const detailGifService = {
  getDetails,
}
