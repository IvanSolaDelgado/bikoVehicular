import './Searchbar.css'
import lupa from '../assets/Lupa.svg'
import { ChangeEvent, MouseEvent, useState } from 'react'

export const Searchbar = () => {
  const [query, setQuery] = useState('')

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(query)

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
