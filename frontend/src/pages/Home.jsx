import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Bienvenido al Turnero</h1>
        <p>Comienza reservando un turno o viendo los docentes disponibles.</p>
      </header>
      <div className="home-buttons">
        <button className="home-button blue-button" onClick={() => navigate("/docentes")}>
          Ver Docentes
        </button>
        <button className="home-button green-button" onClick={() => navigate("/turnos")}>
          Reservar Turno
        </button>
      </div>
    </div>
  );
};

export default Home;
