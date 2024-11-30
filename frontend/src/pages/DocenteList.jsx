import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DocenteList = () => {
  const [docentes, setDocentes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/docentes")
      .then((response) => {
        setDocentes(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los docentes:", error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Docentes</h1>
      <ul>
        {docentes.map((docente) => (
          <li key={docente.id}>
            <Link to={`/docentes/${docente.id}`}>
              {docente.nombre} - {docente.aula}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocenteList;
