import React, { useEffect, useState } from "react";

const TrafficSignals = () => {
  const [signals, setSignals] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSignals = () => {
      setLoading(true);
      fetch("http://127.0.0.1:8000/traffic/lights")
        .then((res) => res.json())
        .then((data) => {
          setSignals(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching signals:", error);
          setLoading(false);
        });
    };

    fetchSignals();
    const interval = setInterval(fetchSignals, 5000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  const getStatusClass = (status) => {
    switch (status) {
      case "GREEN":
        return "signal-green";
      case "RED":
        return "signal-red";
      case "YELLOW":
        return "signal-yellow";
      default:
        return "signal-red";
    }
  };

  return (
    <div>
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Live Traffic Signals Status</h2>
        </div>

        {Object.keys(signals).length === 0 ? (
          <div className="no-data">No signal data available at the moment.</div>
        ) : (
          <div className="signal-grid">
            {Object.entries(signals).map(([cam, status]) => (
              <div key={cam} className="signal-card">
                <div className="signal-name">{cam}</div>
                <div className="signal-status">
                  <div
                    className={`signal-indicator ${getStatusClass(status)}`}
                  ></div>
                  {status}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TrafficSignals;
