import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css"; // Asegúrate de que este archivo exista y tenga estilos válidos
import logo from "../assets/tic-logo.png";
import calendario from "../assets/icon calendario.png";
import home from "../assets/icon casa.png";
import HorarioProfesor from "../assets/Horarioprofesor.png";

const NavBar = () => {
  return (
    <nav className="navbar">
      {/* Contenedor del logo */}
      <div className="navbar-logo-container">
        <img src={logo} alt="TIC Logo" className="navbar-logo" />
      </div>
      
      {/* Links de navegación */}
      <ul className="navbar-links">
        <li>
          <div className="navbarlink">
            <Link to="/">
              <img src={home} alt="Inicio" className="faicon" />
              Inicio
            </Link>
          </div>
        </li>
        <li>
          <div className="navbarlink">
            <Link to="/turnos">
              <img src={calendario} alt="Reservar Turno" className="faicon" />
              Reservar Turno
            </Link>
          </div>
        </li>
        <li>
          <div className="navbarlink">
            <Link to="/HorarioProfesores">
              <img src={HorarioProfesor} alt="Horarios de Profesores" className="faicon" />
              Horarios de Profesores
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
