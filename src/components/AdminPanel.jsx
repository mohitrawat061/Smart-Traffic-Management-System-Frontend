import React, { useEffect, useState } from "react";
import "./AdminPanel.css";

const AdminPanel = () => {
  const [violationData, setViolationData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchViolationData = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://127.0.0.1:8000/api/challans");
      const data = await res.json();
      setViolationData(data.reverse()); // latest first
      setLoading(false);
    } catch (err) {
      console.error("Error fetching violation data:", err);
      setLoading(false);
    }
  };

  const handleDownload = (pdfPath) => {
    const url = `http://127.0.0.1:8000/api/challans/download?pdf_path=${encodeURIComponent(
      pdfPath
    )}`;
    const link = document.createElement("a");
    link.href = url;
    link.download = pdfPath.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    fetchViolationData();
    const interval = setInterval(fetchViolationData, 10000); // every 10s
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Traffic Violations</h2>
        </div>

        {violationData.length === 0 ? (
          <div className="no-data">No violations detected yet.</div>
        ) : (
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Vehicle</th>
                  <th>Violation</th>
                  <th>Speed</th>
                  <th>Timestamp</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {violationData.map((violation, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{violation.vehicle}</td>
                    <td>{violation.type}</td>
                    <td>{violation.speed} km/h</td>
                    <td>{violation.timestamp}</td>
                    <td>
                      <button
                        className="btn-download"
                        onClick={() => handleDownload(violation.pdf)}
                      >
                        Download Challan
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
