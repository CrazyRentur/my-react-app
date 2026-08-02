import React from 'react';
import './Footer.css';
import gymBuilding from './assets/images/test.jpg'; // Правильный импорт картинки

// 1. ИМПОРТИРУЕМ ВАШУ КАРТУ (убедитесь, что путь к файлу map.tsx верный)
import MyMap from './map';

import { FaMapMarkerAlt, FaRegClock, FaPhoneAlt, FaInstagram, FaTelegramPlane} from 'react-icons/fa';

export default function Footer() {
  // Координаты ул. Гамарника, 30А
  const lat = '53.957148';
  const lng = '27.606268';
  const label = encodeURIComponent('Тренажерный зал ONE');

  // Проверяем, мобильное ли устройство и какая ОС
  const isIOS = typeof window !== 'undefined' && /iPhone|iPad|iPod/i.test(navigator.userAgent);
  
  // Для Android: geo-протокол (вызовет системное окно выбора: Яндекс, Google, 2GIS)
  // Для iOS: ссылка на Apple Maps (смартфон сам предложит открыть в приложении карт)
  // Для ПК: оставляем вашу стандартную веб-ссылку на Google Maps
  const isMobile = typeof window !== 'undefined' && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  
  let routeLink = 'https://maps.app.goo.gl/142EpgyUwnxKWtxe7?g_st=atm'; // дефолт для ПК

  if (isMobile) {
    routeLink = isIOS 
      ? `maps://?q=${label}&ll=${lat},${lng}` 
      : `geo:${lat},${lng}?q=${lat},${lng}(${label})`;
  }

  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* Блок контактов */}
        <div className="footer-contacts">
          <h3 className="footer-title">КАК НАС НАЙТИ</h3>
          
          <ul className="contacts-list">
            <li className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div className="contact-text">
                <p>г. Минск, ул. Гамарника, 30А</p>
                {/* ИСПРАВЛЕНО: теперь здесь динамическая ссылка routeLink */}
                <a href={routeLink} className="route-link">
                  Построить маршрут
                </a>
              </div>
            </li>

            <li className="contact-item">
              <FaRegClock className="contact-icon" />
              <div className="contact-text">
                <p>Пн - Пт: 08:00 - 23:00 <br/> Сб - Вс: 09:00 - 21:00</p>
              </div>
            </li>

            <li className="contact-item">
              <FaPhoneAlt className="contact-icon" />
              <div className="contact-text">
                <a href="tel:+375296671855" className="phone-link">+375 (29) 667-18-55</a>
              </div>
            </li>

           <li className="contact-item">
              <FaInstagram className="contact-icon" />
              <div className="contact-text">
                <a href="https://www.instagram.com/gym_one_minsk/" target="_blank" rel="noopener noreferrer" className="social-link">@gym_one_minsk</a>
              </div>    
            </li>
                       <li className="contact-item">
              <FaTelegramPlane className="contact-icon" />
              <div className="contact-text">
                <a href="https://t.me/+NMl8Zh9GTHZiYTRi" target="_blank" rel="noopener noreferrer" className="social-link">ONE тренажерный зал</a>
              </div>    
            </li>
          </ul>
        </div>

        {/* 2. БЛОК КАРТЫ (Сюда мы вставили <MyMap /> вместо заглушки) */}
        <div className="footer-map-wrapper">
          <MyMap />
        </div>

        {/* Блок фотографии здания */}
        <div className="footer-photo-wrapper">
          <img 
            src={gymBuilding} 
            alt="Вход в тренажерный зал ONE" 
            className="footer-building-photo" 
          />
        </div>

      </div>
    </footer> 
  );
}
