import React, { useState } from 'react';
import logoImage from '../assets/images/logo.png';
import line3 from '../assets/icons/line3.svg';
import { FaInstagram, FaTelegramPlane } from 'react-icons/fa';

function Header() {
  // 1. Превращаем массив в объекты, где у каждого пункта есть свое имя и точный id блока
  const menuItems = [
    { name: 'О нас', id: 'about' },
    { name: 'Тренажерный зал', id: 'gym' },
    { name: 'Абонементы', id: 'pricing' },
    { name: 'Услуги', id: 'services' },
    { name: 'Контакты', id: 'contacts' }
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 2. Функция для плавного скролла к нужному блоку
  const handleScroll = (id) => {
    setIsMenuOpen(false); // Закрываем мобильную бургер-менюшку при клике

    // Находим нужный блок на странице по его id
    const element = document.getElementById(id);
    if (element) {
      // Запускаем плавную прокрутку браузера
      element.scrollIntoView({
        behavior: 'smooth', // Делает скролл плавным
        block: 'start'      // Доезжает ровно до верхнего края блока
      });
    }
  };

  return (
    <header className="site-header">
      <div className="logo">
        <img src={logoImage} alt="Логотип компании" />
      </div>

      <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        {menuItems.map((item, index) => (
          <div key={index} className="mainMenu">
            {/* 3. Вешаем вызов функции handleScroll и передаем туда id блока */}
            <p onClick={() => handleScroll(item.id)} style={{ cursor: 'pointer' }}>
              {item.name}
            </p>
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

      <div className="burger-menu" onClick={toggleMenu}>
        <img src={line3} className="line3" alt="menu icon" />
      </div>
    </header>
  );
}

export default Header;
