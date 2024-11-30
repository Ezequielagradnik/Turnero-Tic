import React, { useState } from "react";
import axios from "axios";

const TurnoForm = ({ docenteId }) => {
  const [alumnoNombre, setAlumnoNombre] = useState("");
  const [bloqueHorario, setBloqueHorario] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5000/turnos", {
      alumno_nombre: alumnoNombre,
      docente_id: docenteId,
      bloque_horario: bloqueHorario,
      posicion: 1, // Esto se calculará automáticamente en el backend
    })
      .then(() => {
        alert("Turno reservado exitosamente");
      })
      .catch((error) => {
        console.error("Error al reservar el turno:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tu nombre"
        value={alumnoNombre}
        onChange={(e) => setAlumnoNombre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Bloque horario (e.g., 08:00-08:30)"
        value={bloqueHorario}
        onChange={(e) => setBloqueHorario(e.target.value)}
      />
      <button type="submit">Reservar Turno</button>
    </form>
  );
};

export default TurnoForm;
