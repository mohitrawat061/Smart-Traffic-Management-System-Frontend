import React from "react";

const camIds = ["CAM1", "CAM2", "CAM3", "CAM4"];

const Streams = () => {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>Live Camera Feeds</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1rem",
        }}
      >
        {camIds.map((camId) => (
          <div
            key={camId}
            style={{
              textAlign: "center",
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "0.5rem",
            }}
          >
            <h3>{camId}</h3>
            <img
              src={`http://localhost:8000/video_feed/${camId}`}
              alt={camId}
              style={{ width: "100%", borderRadius: "6px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Streams;
