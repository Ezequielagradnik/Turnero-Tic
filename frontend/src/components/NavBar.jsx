import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Turnero</h1>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/docentes">Docentes</Link></li>
        <li><Link to="/turnos">Turnos</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
