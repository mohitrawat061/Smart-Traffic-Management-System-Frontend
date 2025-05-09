import React, { useEffect, useState } from "react";

const SafetyAlerts = () => {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlerts = () => {
      setLoading(true);
      fetch("http://127.0.0.1:8000/api/safety-alerts")
        .then((res) => res.json())
        .then((data) => {
          setAlerts(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching alerts:", error);
          setLoading(false);
        });
    };

    fetchAlerts();
    const interval = setInterval(fetchAlerts, 5000);
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
          <h2 className="card-title">Women Safety Alerts</h2>
        </div>

        {alerts.length === 0 ? (
          <div className="no-data">
            No safety alerts detected. All systems functioning normally.
          </div>
        ) : (
          <div>
            {alerts.map((alert, idx) => (
              <div key={idx} className="safety-alert">
                <div className="safety-alert-title">ALERT</div>
                <div className="safety-alert-message">{alert.message}</div>
                <div className="safety-alert-timestamp">{alert.timestamp}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SafetyAlerts;
