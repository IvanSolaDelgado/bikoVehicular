import './Searchbar.css'
import lupa from '../assets/Lupa.svg'
import { ChangeEvent, FC, MouseEvent, useState } from 'react'

interface Props {
  query: string
  setQuery: (query: string) => void
}

export const Searchbar: FC<Props> = ({ query, setQuery }) => {
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }
  const handleOnClick = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault()

    console.log(query)
  }
  return (
    <form className="searchbar-container">
      <input
        type="search"
        className="searchbar"
        placeholder="¿Que quieres buscar? ¡Encuentralo!"
        onChange={handleOnChange}
        value={query}
      />
      <button
        className="search-button"
        aria-label="Search"
        onClick={handleOnClick}
      >
        <img src={lupa} alt="" />
      </button>
    </form>
  )
}
