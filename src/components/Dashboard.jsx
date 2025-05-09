import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  CartesianGrid,
} from "recharts";

const Dashboard = () => {
  const [stats, setStats] = useState({ vehicles: 0, violations: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = () => {
      setLoading(true);
      fetch("http://127.0.0.1:8000/api/stats")
        .then((res) => res.json())
        .then((data) => {
          setStats(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching stats:", error);
          setLoading(false);
        });
    };

    fetchStats();
    const interval = setInterval(fetchStats, 3000);

    return () => clearInterval(interval);
  }, []);

  // Use CSS variables for chart colors to support theme switching
  const getChartColors = () => {
    const computedStyle = getComputedStyle(document.documentElement);
    return {
      primary: computedStyle.getPropertyValue("--primary").trim(),
      secondary: computedStyle.getPropertyValue("--secondary").trim(),
    };
  };

  const chartColors = getChartColors();

  const chartData = [
    { name: "Vehicles", value: stats.vehicles, fill: chartColors.primary },
    {
      name: "Violations",
      value: stats.violations,
      fill: chartColors.secondary,
    },
  ];

  const renderCustomizedLabel = (props) => {
    const { x, y, width, value } = props;
    // Get current theme text color
    const computedStyle = getComputedStyle(document.documentElement);
    const textColor =
      computedStyle.getPropertyValue("--text-main").trim() || "#212529";

    return (
      <text
        x={x + width / 2}
        y={y - 10}
        fill={textColor}
        textAnchor="middle"
        dominantBaseline="middle"
        fontWeight="bold"
      >
        {value}
      </text>
    );
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="stats-grid">
        <div className="stat-card primary">
          <div className="stat-label">Total Vehicles</div>
          <div className="stat-value">{stats.vehicles}</div>
          <div>Detected Today</div>
        </div>

        <div className="stat-card secondary">
          <div className="stat-label">Traffic Violations</div>
          <div className="stat-value">{stats.violations}</div>
          <div>Recorded Today</div>
        </div>

        <div className="stat-card success">
          <div className="stat-label">Efficiency Rate</div>
          <div className="stat-value">
            {stats.vehicles > 0
              ? Math.round(
                  ((stats.vehicles - stats.violations) / stats.vehicles) * 100
                )
              : 0}
            %
          </div>
          <div>Compliance Rate</div>
        </div>
      </div>

      <div className="card" style={{ marginTop: "2rem" }}>
        <div className="card-header">
          <h2 className="card-title">Traffic Analytics</h2>
        </div>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            data={chartData}
            margin={{ top: 30, right: 30, left: 20, bottom: 20 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f0f0f0"
            />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis
              allowDecimals={false}
              axisLine={false}
              tickLine={false}
              tickCount={5}
            />
            <Tooltip
              cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
              contentStyle={{
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                border: "none",
              }}
            />
            <Bar
              dataKey="value"
              radius={[8, 8, 0, 0]}
              barSize={80}
              fill="#3a86ff"
            >
              <LabelList dataKey="value" content={renderCustomizedLabel} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
