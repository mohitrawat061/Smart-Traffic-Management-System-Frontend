import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AdminPanel from "./components/AdminPanel";
import TrafficSignals from "./components/TrafficSignals";
import SafetyAlerts from "./components/SafetyAlerts";
import Streams from "./components/Streams";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import "./App.css";

export default function App() {
  // Initialize theme on app load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  return (
    <div className="App">
      <Routes>
        {/* Home page route without navbar */}
        <Route path="/" element={<HomePage />} />

        {/* Routes with shared Layout (includes navbar) */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/signals" element={<TrafficSignals />} />
          <Route path="/alerts" element={<SafetyAlerts />} />
          <Route path="/streams" element={<Streams />} />

          {/* Redirect any unknown paths to Dashboard */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>
      </Routes>
    </div>
  );
}
