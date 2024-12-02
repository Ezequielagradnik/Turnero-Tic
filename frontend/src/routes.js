import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ReservarTurno from "./pages/ReservarTurno";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/turnos" element={<ReservarTurno />} />
    </Routes>
  );
};

export default AppRoutes;
