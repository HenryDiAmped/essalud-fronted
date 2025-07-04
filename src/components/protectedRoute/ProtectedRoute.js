import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
    const usuario = JSON.parse(localStorage.getItem("usuario"));

    if (!usuario) {
        // Si NO hay usuario en localStorage, redirige al login
        return <Navigate to="/autenticacion" replace />;
    }

    return children;
};
