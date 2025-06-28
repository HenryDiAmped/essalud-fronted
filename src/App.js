import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Autenticacion } from "./pages/autenticacion/Autenticacion";
import { EscogerPA } from "./pages/escogerPA/EscogerPA";
import { Paginaerror } from "./pages/paginaerror/Paginaerror";
import { Home } from "./pages/home/Home";
import { Ingresar } from "./pages/ingresar/Ingresar";
import { Registrar } from "./pages/registrar/Registrar";
import { HomeCitas } from "./pages/homeCitas/HomeCitas";
import { HomeHistorial } from "./pages/homeHistorial/HomeHistorial";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { DashboardUsuarios } from "./pages/dashboardUsuarios/DashboardUsuarios";
import { DashboardMedicos } from "./pages/dashboardMedicos/DashboardMedicos";
import { DashboardEspecialidades } from "./pages/dashboardEspecialidades/DashboardEspecialidades";
import { DashboardSedes } from "./pages/dashboardSedes/DashboardSedes";
import { DashboardJornada } from "./pages/dashboardJornada/DashboardJornada";
import { DashboardTurnosAtencion } from "./pages/dashboardTurnosAtencion/DashboardTurnosAtencion";
import { DetallarCita } from "./pages/detallarCita/DetallarCita";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<HomeCitas />} />
          <Route path="reservaCitas" element={<HomeCitas />} />
          <Route path='reservaCitas/detallaCita/:idSede' element={<DetallarCita />} />
          <Route path="historialCitas" element={<HomeHistorial />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard" element={<DashboardUsuarios />} />
          <Route path="moduloUsuarios" element={<DashboardUsuarios />} />
          <Route path="moduloMedicos" element={<DashboardMedicos />} />
          <Route path="moduloEspecialidades" element={<DashboardEspecialidades />} />
          <Route path="moduloSedes" element={<DashboardSedes />} />
          <Route path="moduloJornadas" element={<DashboardJornada />} />
          <Route path="moduloTurnos" element={<DashboardTurnosAtencion />} />
        </Route>
        <Route path="/autenticacion" element={<Autenticacion />} />
        <Route path="/escogerpa" element={<EscogerPA />} />
        <Route path="/ingresar" element={<Ingresar />} />
        <Route path="/registrar" element={<Registrar />} />
        <Route path="*" element={<Paginaerror />} />
      </Routes>
    </div>
  );
}

export default App;
