import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ReservarTurno from "./pages/ReservarTurno";
import HorarioProfesores from "./pages/HorarioProfesores";



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/turnos" element={<ReservarTurno />} />
      <Route path="/Horarios" element={<HorarioProfesores />} />
    </Routes>
  );
};

export default AppRoutes;
