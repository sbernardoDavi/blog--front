"use client";

import { useState } from "react";
import Today from "./Today/Today";
import "./Navbar.css";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="mobile-menu-btn"
        onClick={toggleSidebar}
        aria-label="Abrir menu"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 12H21M3 6H21M3 18H21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="sidebar-overlay" onClick={closeSidebar}></div>
      )}

      <nav className={`navbar ${isSidebarOpen ? "sidebar-open" : ""}`}>
        <div className="navbar-container">
          <ul className="navbar-links">
            <li>
              <a href="/" onClick={closeSidebar}>
                Home
              </a>
            </li>
            <li>
              <a href="/artigos" onClick={closeSidebar}>
                Artigos
              </a>
            </li>
            {/* Today aparece na lista apenas no desktop */}
            <li>
              <a href="#footer" onClick={closeSidebar}>
                Contato
              </a>
            </li>
            <li>
              <a href="#calendar" onClick={closeSidebar}>
                Agenda
              </a>
            </li>
            <li>
              <a href="#about" onClick={closeSidebar}>
                Sobre Nós
              </a>
            </li>
          </ul>

          {/* Desktop: LADP à direita */}
          <div className="navbar-brand desktop-only">
            <span className="ladp-gradient">LADP</span>
          </div>

          {/* Mobile: LADP e Today na parte inferior */}
          <div className="navbar-bottom mobile-only">
            <div className="navbar-brand">
              <span className="ladp-gradient">LADP</span>
            </div>
            <div className="navbar-today">
              <Today />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
