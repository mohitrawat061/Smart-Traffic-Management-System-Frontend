import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  // Check for saved theme preference or default to 'light'
  const getSavedTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "light";
  };

  const [theme, setTheme] = useState(getSavedTheme);

  useEffect(() => {
    // Update data-theme attribute on document when theme changes
    document.documentElement.setAttribute("data-theme", theme);
    // Save theme preference to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="theme-switch-wrapper">
      <label className="theme-switch" htmlFor="theme-checkbox">
        <input
          type="checkbox"
          id="theme-checkbox"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        <div className="slider">
          <span className="slider-icon slider-icon-dark">☀️</span>
          <span className="slider-icon slider-icon-light">🌙</span>
        </div>
      </label>
    </div>
  );
};

export default ThemeToggle;
