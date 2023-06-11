import React, { useState, useEffect } from 'react';
import s from "./Switch.module.css";

export default function Switch() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleSwitchChange = (e) => {
    const newTheme = e.target.checked ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <div>
      <label htmlFor="switch" className={s.switch}>
        <input
          className={s.switch_input}
          type="checkbox"
          id="switch"
          checked={theme === 'dark'}
          onChange={handleSwitchChange}
        />
        <span className={s.slider}></span>
      </label>
    </div>
  );
}