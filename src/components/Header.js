import React, { useState } from 'react';
import logoImage from '../assets/images/logo.png';
import line3 from '../assets/icons/line3.svg';
import { FaInstagram, FaTelegramPlane } from 'react-icons/fa';

function Header() {
  const menuItems = ['О нас', 'Тренажерный зал', 'Абонемент', 'Услуги', 'Контакты'];
  // Состояние для открытия/закрытия мобильного меню
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="site-header">
      <div className="logo">
        <img src={logoImage} alt="Логотип компании" />
      </div>

      {/* Добавляем динамический класс 'open' в зависимости от состояния */}
      <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        {menuItems.map((item, index) => (
          <div key={index} className="mainMenu">
            <p onClick={() => setIsMenuOpen(false)}>{item}</p>
          </div>
        ))}
      </nav>

      <div className="social-icons">
        <a href="https://www.instagram.com/gym_one_minsk" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://t.me/+NMl8Zh9GTHZiYTRi" target="_blank" rel="noreferrer">
          <FaTelegramPlane />
        </a>
      </div>

      {/* Кнопка бургера — вешаем клик для переключения меню */}
      <div className="burger-menu" onClick={toggleMenu}>
        <img src={line3} className="line3" alt="menu icon" />
      </div>
    </header>
  );
}

export default Header;
