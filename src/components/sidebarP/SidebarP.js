import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./SidebarP.css";

export const SidebarP = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate(); // para redirigir

  // Recuperar usuario
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  // Detecta si es móvil al cargar y al cambiar el tamaño de la pantalla
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  }, [isMobile]);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const handleLogout = () => {
    localStorage.removeItem("usuario");
    navigate("/ingresar");
  };

  return (
    <>
      <div
        className={`sidebar d-flex flex-column ${collapsed ? "collapsed" : ""}`}
        id="sidebar"
      >
        <div className="sidebar-header">
          <span className="sidebar-text">
            PACIENTE: {usuario.nombre} {usuario.apellido}
          </span>
          <button
            className="btn btn-outline-light px-2 py-1 rounded-2"
            style={{ width: "36px", height: "36px" }}
            onClick={toggleSidebar}
          >
            <i className="bi bi-list"></i>
          </button>
        </div>

        <nav className="nav flex-column mt-2">
          <NavLink
            to="/reservaCitas"
            className={({ isActive }) =>
              `nav-link d-flex align-items-center ${isActive ? "active" : ""}`
            }
            onClick={() => isMobile && setCollapsed(true)}
          >
            <i className="bi bi-calendar-check me-2"></i>
            <span className="sidebar-text">Citas</span>
          </NavLink>
          <NavLink
            to="/historialCitas"
            className={({ isActive }) =>
              `nav-link d-flex align-items-center ${isActive ? "active" : ""}`
            }
            onClick={() => isMobile && setCollapsed(true)}
          >
            <i className="bi bi-journal-text me-2"></i>
            <span className="sidebar-text">Historial</span>
          </NavLink>
        </nav>

        <div className="logout mt-auto p-3 border-top border-secondary">
          <button
            className="btn btn-outline-danger w-100 d-flex align-items-center justify-content-center"
            onClick={handleLogout}
          >
            <i className="bi bi-box-arrow-right me-2"></i>
            <span className="sidebar-text">Cerrar sesión</span>
          </button>
        </div>
      </div>

      {!collapsed && isMobile && (
        <div
          className="sidebar-overlay"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};
