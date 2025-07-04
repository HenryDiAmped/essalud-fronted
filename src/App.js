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
import { ResumenCita } from "./pages/resumenCita/ResumenCita";
import { ProtectedRoute } from "./components/protectedRoute/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>}>
          <Route path="/" element={<ProtectedRoute><HomeCitas /></ProtectedRoute>} />
          <Route path="reservaCitas" element={<ProtectedRoute><HomeCitas /></ProtectedRoute>} />
          <Route path='reservaCitas/detallaCita/:idSede' element={<ProtectedRoute><DetallarCita /></ProtectedRoute>} />
          <Route path="reservaCitas/resumen-cita" element={<ProtectedRoute><ResumenCita /></ProtectedRoute>} />
          <Route path="historialCitas" element={<ProtectedRoute><HomeHistorial /></ProtectedRoute>} />
        </Route>
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}>
          <Route path="/dashboard" element={<ProtectedRoute><DashboardUsuarios /></ProtectedRoute>} />
          <Route path="moduloUsuarios" element={<ProtectedRoute><DashboardUsuarios /></ProtectedRoute>} />
          <Route path="moduloMedicos" element={<ProtectedRoute><DashboardMedicos /></ProtectedRoute>} />
          <Route path="moduloEspecialidades" element={<ProtectedRoute><DashboardEspecialidades /></ProtectedRoute>} />
          <Route path="moduloSedes" element={<ProtectedRoute><DashboardSedes /></ProtectedRoute>} />
          <Route path="moduloJornadas" element={<ProtectedRoute><DashboardJornada /></ProtectedRoute>} />
          <Route path="moduloTurnos" element={<ProtectedRoute><DashboardTurnosAtencion /></ProtectedRoute>} />
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
