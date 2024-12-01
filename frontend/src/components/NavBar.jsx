import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import logo from "../assets/tic-logo.png";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo-container">
        <img src={logo} alt="TIC Logo" className="navbar-logo" />

      </div>
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/turnos">Reservar Turno</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
