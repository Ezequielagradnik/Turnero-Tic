import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DocenteList from "./pages/DocenteList";
import ReservarTurno from "./pages/ReservarTurno";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/docentes" element={<DocenteList />} />
      <Route path="/turnos" element={<ReservarTurno />} />
    </Routes>
  );
};

export default AppRoutes;
