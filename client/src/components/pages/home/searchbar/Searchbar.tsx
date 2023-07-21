import './Searchbar.css'
import lupa from '../../../../assets/Lupa.svg'
import { ChangeEvent, FC, useState } from 'react'

interface Props {
  handleOnClick: (query: string) => void
  onChange: (query: string) => void
}

export const Searchbar: FC<Props> = ({ handleOnClick, onChange }) => {
  const [query, setQuery] = useState('')

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
    onChange(event.target.value)
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
        onClick={(e) => {
          e.preventDefault()
          handleOnClick(query)
        }}
      >
        <img src={lupa} alt="" />
      </button>
    </form>
  )
}
