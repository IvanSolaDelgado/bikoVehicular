import './Searchbar.css'
import lupa from '../assets/Lupa.svg'

export const Searchbar = () => {
  return (
    <form className="searchbar-container">
      <input
        type="search"
        className="searchbar"
        placeholder="¿Que quieres buscar? ¡Encuentralo!"
      />
      <button className="search-button" aria-label="Search">
        <img src={lupa} alt="" />
      </button>
    </form>
  )
}
