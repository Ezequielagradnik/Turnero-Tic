import React, { useEffect, useState } from 'react';
import '../styles/HorarioProfesores.css';

const HorarioProfesores = () => {
  const [profesores, setProfesores] = useState([]);

  useEffect(() => {
    fetch('DSP PONER CUANDO TERMINE BERTO ') 
      .then((response) => response.json())
      .then((data) => setProfesores(data))
      .catch((error) => console.error('Error al obtener los datos:', error));
  }, []);

  return (
    <div className="contenedor-horario">
      <h1>Horario de Profesores</h1>
      <table className="tabla-horario">
        <thead>
          <tr>
            <th>Profesor</th>
            {[...Array(6)].map((_, i) => (
              <th key={i}>Bloque {i + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {profesores.map((profesor, idx) => (
            <tr key={idx}>
              <td>{profesor.name}</td>
              {profesor.blocks.map((bloque, index) => (
                <td key={index}>{bloque}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HorarioProfesores;
