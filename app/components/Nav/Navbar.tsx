import React from "react";
import Today from "../Today/Today";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div style={{ alignItems: "center" }}>
        <ul className="navbar-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/artigos">Artigos</a>
          </li>
          <li>
            <Today />
          </li>
          <li>
            <a href="/agenda">Agenda</a>
          </li>
          <li>
            <a href="/sobre">Sobre Nós</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
