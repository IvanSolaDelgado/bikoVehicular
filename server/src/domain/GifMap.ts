import { Gif } from './Gif'
import { GifDTO } from './GifDTO'

export const mapData = (gif: Gif): GifDTO => {
  return {
    name: gif.title,
    imgUrl: gif.images.original.url,
  }
}
