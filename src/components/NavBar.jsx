// src/components/NavBar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import "./NavBar.css";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-logo">
        <span className="navbar-logo-icon">🚦</span>
        Smart Traffic
      </NavLink>

      <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="nav-link-icon">🏠</span>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="nav-link-icon">📊</span>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="nav-link-icon">⚙️</span>
            Admin
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/signals"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="nav-link-icon">🚥</span>
            Signals
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/alerts"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="nav-link-icon">🛡️</span>
            Safety
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/streams"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="nav-link-icon">📽</span>
            Streams
          </NavLink>
        </li>
        <li className="theme-toggle-container">
          <ThemeToggle />
        </li>
      </ul>

      <button className="menu-button" onClick={toggleMenu}>
        {isMenuOpen ? "✕" : "☰"}
      </button>
    </nav>
  );
}
