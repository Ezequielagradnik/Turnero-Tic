"use client"
import { useNavigate } from "react-router-dom"
import "../styles/Home.css"

const Home = () => {
  const navigate = useNavigate()

  const turnos = [
    { id: 1, docente: "Chona Pardo", fecha: "Lunes 2/12", bloque: "1° Bloque", numero: 3 },
    { id: 2, docente: "Nacho Vigilante", fecha: "Jueves 5/12", bloque: "3° Bloque", numero: 15 },
  ]

  return (
    <div className="home-container">
      <h1 className="home-title">Inicio</h1>
      <h2 className="home-subtitle">Mis Turnos</h2>
      <div className="turnos-wrapper">
        <div className="turnos-container">
          {turnos.map((turno) => (
            <div key={turno.id} className="turno-card">
              <div className="turno-header">
                <h1>{turno.docente}</h1>
              </div>
              <div className="turno-body">
                <h2 className="turno-numero">{turno.numero}</h2>
                <div className="turno-details">
                  <p>{turno.fecha}</p>
                  <p>{turno.bloque}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="turno-card vacio">
            <p>Vacío</p>
            <button onClick={() => navigate("/turnos")} className="nuevo-turno-button">
              +
            </button>
          </div>
        </div>
      </div>
      <h2 className="nuevo-turno-text">Nuevo turno</h2>
      <button className="reservar-turno-button" onClick={() => navigate("/turnos")}>
        Reservar turno
      </button>
    </div>
  )
}

export default Home

