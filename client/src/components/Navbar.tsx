import './Navbar.css'
import logo from '../assets/Logo.svg'

export const Navbar = () => {
  return (
    <div className="navbar-container" tabIndex={1}>
      <img className="navbar-logo" src={logo} alt="logo" />
      <h1 className="navbar-title">guifaffinity prueba</h1>
    </div>
  )
}
