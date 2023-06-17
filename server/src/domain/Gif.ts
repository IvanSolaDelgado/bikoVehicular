export interface Gif {
  id: string
  type: string
  slug: string
  giphyUrl: string
  title: string
  source_tld: string
  source_post_url: string
  import_datetime: Date
  username: string
  images: Images
  tags: string[]
}

export interface Images {
  original: Original
  small: Original
}

export interface Original {
  width: string
  height: string
  url: string
}
