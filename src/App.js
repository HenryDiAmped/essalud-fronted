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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<HomeCitas/>}/>
          <Route path="reservaCitas" element={<HomeCitas/>}/>
          <Route path="historialCitas" element={<HomeHistorial/>}/>
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
