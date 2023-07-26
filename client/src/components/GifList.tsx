import { FC } from 'react'
import { Gif } from '../core/domain/Gif'
import './GifList.css'
import arrow from '../assets/Arrow 1.svg'
import { Link, useParams } from 'react-router-dom'

interface Props {
  gifs: Gif[]
}

export const GifList: FC<Props> = ({ gifs }) => {
  return (
    <>
      <header className="header-container">
        <img className="header-arrow" src={arrow} alt="Diagonal blue arrow " />
        <h2 className="header-title">Los gifs más trendings del momento</h2>
      </header>
      <div className="gifs-container">
        {gifs.map((gif, index) => (
          <Link to={`/details/${gif.id}`} key={index}>
            <img className="gif" src={gif.imgUrl} alt={gif.name} key={index} />
          </Link>
        ))}
      </div>
    </>
  )
}
