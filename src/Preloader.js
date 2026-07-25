import React from 'react';
import './Preloader.css';
// Импортируй сюда путь к файлу твоего логотипа
import logoImg from './assets/images/logo.png'; 

export default function Preloader() {
  return (
    <div className="preloader-overlay">
      <div className="preloader-content">
        {/* Пульсирующий и крутящийся логотип */}
        <img src={logoImg} alt="Загрузка..." className="preloader-logo" />
        
        {/* Аккуратный минималистичный текст снизу */}
        <p className="preloader-text">Загрузка...</p>
      </div>
    </div>
  );
}
