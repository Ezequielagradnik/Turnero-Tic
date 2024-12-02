import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import logo from "../assets/tic-logo.png";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
//import { faCalendarPlus } from '@fortawesome/free-regular-svg-icons'; // Importar desde el paquete regular
import calendario from "../assets/icon calendario.png"
import home from "../assets/icon casa.png"


const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo-container">
        <img src={logo} alt="TIC Logo" className="navbar-logo" />
      </div>
      <ul className="navbar-links">
        <li><div className="navbarlink"><Link to="/"><img src={home} alt="" className="faicon" />Inicio</Link></div></li>
        <li><div className="navbarlink"><Link to="/turnos"><img src={calendario} alt="" className="faicon" />Reservar Turno</Link></div></li>
        
      </ul>
    </nav>
  );
};

export default NavBar;
