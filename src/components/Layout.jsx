// src/components/Layout.jsx
import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./NavBar";

export default function Layout() {
  const [emergency, setEmergency] = useState({ active: false });
  const location = useLocation();

  useEffect(() => {
    const fetchEmergency = () => {
      fetch("http://127.0.0.1:8000/api/emergency-status")
        .then((res) => res.json())
        .then((data) => setEmergency(data))
        .catch((err) => console.error("Error fetching emergency:", err));
    };

    fetchEmergency();
    const interval = setInterval(fetchEmergency, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {emergency.active && (
        <div
          style={{
            backgroundColor: "#dc2626",
            color: "white",
            padding: "1rem",
            textAlign: "center",
            fontWeight: "bold",
            animation: "pulse 2s infinite",
            zIndex: 1000,
          }}
        >
          🚨 Emergency Vehicle on <strong>{emergency.cam_id}</strong> — Holding
          green for {emergency.remaining_time}s
          <audio key={emergency.cam_id} autoPlay loop>
            <source src="/emergency_alert.mp3" type="audio/mpeg" />
          </audio>
        </div>
      )}
      <NavBar />
      <main style={{ padding: "1rem", marginTop: "70px" }}>
        <Outlet />
      </main>
    </>
  );
}
