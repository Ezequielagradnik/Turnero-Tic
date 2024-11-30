import React, { useState } from "react";
import "../styles/ReservarTurno.css";

const ReservarTurno = () => {
  const [nombre, setNombre] = useState("");
  const [docente, setDocente] = useState("");
  const [hora, setHora] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Turno reservado:", { nombre, docente, hora });
    alert("Turno reservado exitosamente.");
  };

  return (
    <div className="reservar-turno-container">
      <div className="reservar-turno-card"> {/* Marco añadido */}
        <h1 className="reservar-turno-title">Reservar Turno</h1>
        <form className="reservar-turno-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Nombre del docente"
            value={docente}
            onChange={(e) => setDocente(e.target.value)}
            required
          />
          <input
            type="time"
            placeholder="Hora del turno"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            required
          />
          <button type="submit" className="reservar-button">Reservar</button>
        </form>
      </div>
    </div>
  );
};

export default ReservarTurno;
