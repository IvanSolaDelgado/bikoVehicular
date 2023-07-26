import { useParams } from 'react-router-dom'
import { Gif } from '../../../core/domain/Gif'
import { FC } from 'react'

const Details = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <>
      <h2>{id}</h2>
    </>
  )
}

export default Details
