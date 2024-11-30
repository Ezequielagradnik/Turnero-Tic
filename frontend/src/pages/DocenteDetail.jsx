import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import TurnoForm from "../components/TurnoForm";

const DocenteDetail = () => {
  const { id } = useParams();
  const [docente, setDocente] = useState(null);
  const [turnos, setTurnos] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/docentes/${id}`)
      .then((response) => {
        setDocente(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener el docente:", error);
      });

    axios.get(`http://localhost:5000/turnos/${id}`)
      .then((response) => {
        setTurnos(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los turnos:", error);
      });
  }, [id]);

  return (
    <div>
      {docente && (
        <div>
          <h1>{docente.nombre} - {docente.aula}</h1>
          <h2>Horarios Disponibles</h2>
          <ul>
            {Object.entries(docente.horario_disponible).map(([bloque, disponible]) => (
              <li key={bloque}>
                {bloque}: {disponible ? "Disponible" : "Ocupado"}
              </li>
            ))}
          </ul>
        </div>
      )}

      <h2>Turnos</h2>
      <ul>
        {turnos.map((turno) => (
          <li key={turno.id}>
            {turno.alumno_nombre} - {turno.bloque_horario} ({turno.estado})
          </li>
        ))}
      </ul>

      <TurnoForm docenteId={id} />
    </div>
  );
};

export default DocenteDetail;
