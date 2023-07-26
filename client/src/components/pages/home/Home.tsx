import { FC, useEffect, useState } from 'react'
import { Gif } from '../../../core/domain/Gif'
import { GifList } from '../../GifList'
import { Navbar } from '../../Navbar'
import { Searchbar } from './searchbar/Searchbar'
import './Home.css'

interface Props {
  gifs: Gif[] | undefined
  onFilterGifs: (query: string) => void
  onQueryChange: (query: string) => void
}

export const Home: FC<Props> = ({ gifs, onFilterGifs, onQueryChange }) => {
  if (!gifs) return <p>Loading...</p>

  console.log(gifs[0])
  return (
    <section className="home-container">
      <section>
        <header>
          <Navbar />
          <Searchbar handleOnClick={onFilterGifs} onChange={onQueryChange} />
        </header>
        <main>
          {gifs.length === 0 ? (
            <p>Sorry, gifs not found :/</p>
          ) : (
            <GifList gifs={gifs} />
          )}
        </main>
      </section>
    </section>
  )
}
