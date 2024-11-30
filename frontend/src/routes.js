import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DocenteDetail from "./pages/DocenteDetail";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docentes/:id" element={<DocenteDetail />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
