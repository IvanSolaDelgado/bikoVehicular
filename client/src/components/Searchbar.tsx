import './Searchbar.css'

export const Searchbar = () => {
  return (
    <div className="searchbar-container">
      <input
        type="search"
        className="searchbar"
        placeholder="¿Que quieres buscar? ¡Encuentralo!"
      />
    </div>
  )
}
