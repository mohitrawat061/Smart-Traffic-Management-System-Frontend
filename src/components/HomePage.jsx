import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const statsRef = useRef(null);
  const [stats, setStats] = useState({ vehicles: 0, violations: 0 });
  const [animatedStats, setAnimatedStats] = useState({
    vehicles: 0,
    violations: 0,
  });
  const [featuresVisible, setFeaturesVisible] = useState(false);

  // Fetch real stats
  useEffect(() => {
    const fetchStats = () => {
      fetch("http://localhost:8000/api/stats")
        .then((res) => res.json())
        .then((data) => {
          setStats(data);
        })
        .catch((error) => {
          console.error("Error fetching stats:", error);
        });
    };

    fetchStats();
  }, []);

  // Animate counter when stats section is visible
  useEffect(() => {
    if (featuresVisible && stats.vehicles > 0) {
      const animationDuration = 2000; // 2 seconds
      const frameDuration = 1000 / 60; // 60fps
      const totalFrames = Math.round(animationDuration / frameDuration);
      let frame = 0;

      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;

        setAnimatedStats({
          vehicles: Math.floor(progress * stats.vehicles),
          violations: Math.floor(progress * stats.violations),
        });

        if (frame === totalFrames) {
          clearInterval(counter);
          setAnimatedStats(stats);
        }
      }, frameDuration);

      return () => clearInterval(counter);
    }
  }, [featuresVisible, stats]);

  // Animations on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Check if stats section is visible
      if (statsRef.current) {
        const rect = statsRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setFeaturesVisible(true);
        }
      }
    };

    setIsVisible(true);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home-page">
      {/* Floating navigation button */}
      <div className="floating-nav">
        <button
          className="floating-nav-toggle"
          onClick={() => navigate("/dashboard")}
        >
          Enter Dashboard
        </button>
      </div>
      {/* Hero Section */}
      <section className={`hero-section ${isVisible ? "visible" : ""}`}>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="text-gradient">Smart</span> Traffic
            <span className="text-gradient"> Management</span>
          </h1>
          <p className="hero-subtitle">
            AI-powered traffic system that reduces congestion, improves safety,
            and creates smarter cities
          </p>
          <div className="hero-buttons">
            <Link to="/dashboard" className="btn-primary hero-btn">
              Explore Dashboard
            </Link>
            <Link to="/streams" className="btn-secondary hero-btn">
              View Live Streams
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="traffic-animation">
            <div className="road"></div>
            <div className="car car-1"></div>
            <div className="car car-2"></div>
            <div className="car car-3"></div>
            <div className="traffic-light">
              <div className="light red"></div>
              <div className="light yellow"></div>
              <div className="light green active"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" ref={statsRef}>
        <h2 className={`section-title ${featuresVisible ? "visible" : ""}`}>
          Intelligent Traffic Solutions
        </h2>

        <div className="features-grid">
          <div
            className={`feature-card ${featuresVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="feature-icon">🚦</div>
            <h3>Smart Signals</h3>
            <p>
              AI-optimized traffic signals that adapt to real-time conditions
            </p>
          </div>

          <div
            className={`feature-card ${featuresVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="feature-icon">🚓</div>
            <h3>Emergency Response</h3>
            <p>Priority routing for emergency vehicles saving critical time</p>
          </div>

          <div
            className={`feature-card ${featuresVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.5s" }}
          >
            <div className="feature-icon">👁️</div>
            <h3>Computer Vision</h3>
            <p>
              Advanced object detection for vehicles, pedestrians & violations
            </p>
          </div>

          <div
            className={`feature-card ${featuresVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.7s" }}
          >
            <div className="feature-icon">📊</div>
            <h3>Analytics</h3>
            <p>Comprehensive data insights for smarter urban planning</p>
          </div>
        </div>
      </section>

      {/* Stats Section with Parallax */}
      <section
        className="stats-section"
        style={{ backgroundPositionY: scrollY * 0.5 }}
      >
        <div className="stats-overlay">
          <h2 className="section-title light">Real-Time Impact</h2>
          <div className="stats-counters">
            <div className="stat-counter">
              <div className="counter-value">
                {animatedStats.vehicles.toLocaleString()}
              </div>
              <div className="counter-label">Vehicles Monitored</div>
            </div>
            <div className="stat-counter">
              <div className="counter-value">
                {animatedStats.violations.toLocaleString()}
              </div>
              <div className="counter-label">Violations Detected</div>
            </div>
            <div className="stat-counter">
              <div className="counter-value">
                {stats.vehicles > 0
                  ? Math.round(
                      ((stats.vehicles - stats.violations) / stats.vehicles) *
                        100
                    )
                  : 0}
                %
              </div>
              <div className="counter-label">Compliance Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2 className="section-title">How It Works</h2>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-number">1</div>
            <div className="timeline-content">
              <h3>Real-Time Monitoring</h3>
              <p>
                AI-powered cameras continuously monitor traffic flow and detect
                vehicles
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-number">2</div>
            <div className="timeline-content">
              <h3>Intelligent Analysis</h3>
              <p>
                Computer vision algorithms analyze traffic patterns and identify
                violations
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-number">3</div>
            <div className="timeline-content">
              <h3>Adaptive Control</h3>
              <p>
                Traffic signals adjust in real-time based on current conditions
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-number">4</div>
            <div className="timeline-content">
              <h3>Emergency Override</h3>
              <p>
                Automatic priority routing for emergency vehicles when detected
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to make your city smarter?</h2>
          <p>
            Explore our dashboard to see the Smart Traffic Management System in
            action
          </p>
          <Link to="/dashboard" className="btn-primary cta-button">
            Go to Dashboard
          </Link>
        </div>
        <div className="cta-background"></div>
      </section>
    </div>
  );
};

export default HomePage;
