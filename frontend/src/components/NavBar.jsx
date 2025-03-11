"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import "../styles/NavBar.css"
import logo from "../assets/tic-logo.png"
import calendario from "../assets/icon calendario.png"
import home from "../assets/icon casa.png"
import HorarioProfesor from "../assets/Horarioprofesor.png"
import { Menu, X } from "lucide-react"

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar">
      {/* Contenedor del logo */}
      <div className="navbar-logo-container">
        <img src={logo || "/placeholder.svg"} alt="TIC Logo" className="navbar-logo" />
      </div>

      {/* Hamburger menu button for mobile */}
      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Links de navegación */}
      <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <div className="navbarlink">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <img src={home || "/placeholder.svg"} alt="Inicio" className="faicon" />
              <span>Inicio</span>
            </Link>
          </div>
        </li>
        <li>
          <div className="navbarlink">
            <Link to="/turnos" onClick={() => setIsMenuOpen(false)}>
              <img src={calendario || "/placeholder.svg"} alt="Reservar Turno" className="faicon" />
              <span>Reservar Turno</span>
            </Link>
          </div>
        </li>
        <li>
          <div className="navbarlink">
            <Link to="/HorarioProfesores" onClick={() => setIsMenuOpen(false)}>
              <img src={HorarioProfesor || "/placeholder.svg"} alt="Horarios de Profesores" className="faicon" />
              <span>Horarios de Profesores</span>
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar

