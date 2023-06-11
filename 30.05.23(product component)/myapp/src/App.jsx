import React, { useState, useEffect } from 'react';
import ProductsContainer from './components/ProductsContainer/ProductsContainer'
import { products } from './data'
import s from "./App.module.css"
import Switch from './components/Switch/Switch'



export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div>
      <div className={`${s.switch_div} ${theme === 'dark' ? s.switchDivDark : s.switch_div}`}>
        <h3>DAY</h3>
        <Switch />
        <h3>NIGHT</h3>
      </div>

      <div className={`${s.app} ${theme === 'dark' ? s.appDark : ''}`}>
        <ProductsContainer products={products} />
      </div>
    </div>
  );
}







