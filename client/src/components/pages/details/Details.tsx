import { useParams } from 'react-router-dom'
import { Gif } from '../../../core/domain/Gif'
import { FC, useEffect, useState } from 'react'
import { detailGifService } from '../../../core/services/gifs/DetailGifService'

const Details = () => {
  const [gif, setGif] = useState<Gif | undefined>()
  const { id } = useParams<{ id: string }>()

  const getGifDetails = async () => {
    if (id === undefined) return
    const gifDetails = await detailGifService.getDetails(id)
    setGif(gifDetails)
  }

  useEffect(() => {
    getGifDetails()
  }, [])

  return (
    <>
      <div>
        <h2>{gif?.name}</h2>
        <img src={gif?.imgUrl} alt="" />
      </div>
    </>
  )
}

export default Details
