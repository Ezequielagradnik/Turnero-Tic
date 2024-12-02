import React, { useState } from "react";
import "../styles/ReservarTurno.css";

const ReservarTurno = () => {
  const [profesor, setProfesor] = useState("");
  const [bloque, setBloque] = useState("");
  const [dia, setDia] = useState("");
  const [numeroTurno, setNumeroTurno] = useState(null);
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const turnoAsignado = Math.floor(Math.random() * 100) + 1; // Turno aleatorio
    setNumeroTurno(turnoAsignado);
    setMostrarMensaje(true);
  };

  const handleAceptar = () => {
    setMostrarMensaje(false);
    setProfesor("");
    setBloque("");
    setDia("");
  };

  return (
    <div className="reservar-turno-container">
      <h1 className="reservar-un-turno-title">Reservar un turno</h1>
      {mostrarMensaje ? (
        <div className="mensaje-exito-card">
          <h2>Turno asignado con éxito.</h2>
          <p>Profesor: {profesor}</p>
          <p>Día: {dia}</p>
          <p>Bloque: {bloque}</p>
          <h3 className="numero-turno">Número de turno:</h3>
          <h1 className="turno-numero">{numeroTurno}</h1>
          <button className="aceptar-button" onClick={handleAceptar}>
            Aceptar
          </button>
        </div>
      ) : (
        <div className="reservar-turno-card">
          <h2 className="nuevo-turno-title">Nuevo turno</h2>
          <form className="reservar-turno-form" onSubmit={handleSubmit}>
            <label>
              Profesor:
              <select
                value={profesor}
                onChange={(e) => setProfesor(e.target.value)}
                required
              >
                <option value="">--Seleccione profesor--</option>
                <option value="Nacho Vigilante">Nacho Vigilante</option>
                <option value="Chona Pardo">Chona Pardo</option>
              </select>
            </label>
            <label>
              Día:
              <select
                value={dia}
                onChange={(e) => setDia(e.target.value)}
                required
              >
                <option value="">--Seleccione día--</option>
                <option value="Lunes">Lunes</option>
                <option value="Martes">Martes</option>
                <option value="Miércoles">Miércoles</option>
                <option value="Jueves">Jueves</option>
                <option value="Viernes">Viernes</option>
              </select>
            </label>
            <label>
              Bloque:
              <select
                value={bloque}
                onChange={(e) => setBloque(e.target.value)}
                required
              >
                <option value="">--Seleccione bloque--</option>
                <option value="1° Bloque">1° Bloque</option>
                <option value="2° Bloque">2° Bloque</option>
                <option value="3° Bloque">3° Bloque</option>
                <option value="4° Bloque">4° Bloque</option>
                <option value="5° Bloque">5° Bloque</option>
              </select>
            </label>
            <button type="submit" className="reservar-button">
              Reservar
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ReservarTurno;
