import { Gif } from './Gif'

export interface GifRepository {
  getGifListDetails(): Promise<Gif[]>
}
