import React from "react";
import './Home.css';
import { SidebarP } from "../../components/sidebarP/SidebarP";
import { NavbarH } from "../../components/navbarH/NavbarH";
import { useState } from 'react';
import { Outlet } from "react-router-dom";

export const Home = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="home-body app-container">
      <SidebarP collapsed={isCollapsed} toggleSidebar={() => setIsCollapsed(!isCollapsed)} />
      <div className={`main-content ${isCollapsed ? "" : "mobile-pushed"}`}>
        <NavbarH toggleSidebar={() => setIsCollapsed(!isCollapsed)} />
        <Outlet />
      </div>
      <div className="sidebar-overlay" onClick={() => setIsCollapsed(true)} />
    </div>
  );
};