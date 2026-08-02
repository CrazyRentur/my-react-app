import React from 'react';
import './Footer.css';
import gymBuilding from './assets/images/test.jpg'; 

// ИМПОРТИРУЕМ ВАШУ КАРТУ
import MyMap from './map';

import { FaMapMarkerAlt, FaRegClock, FaPhoneAlt, FaInstagram, FaTelegramPlane} from 'react-icons/fa';

export default function Footer() {
  // Название и точный адрес для идеального поиска картами
  const placeName = encodeURIComponent('Тренажерный зал ONE, Гамарника 30А, Минск');
  const latLng = '53.957148,27.606268';

  // Проверяем операционную систему устройства
  const isIOS = typeof window !== 'undefined' && /iPhone|iPad|iPod/i.test(navigator.userAgent);
  const isAndroid = typeof window !== 'undefined' && /Android/i.test(navigator.userAgent);
  
  let routeLink = `https://google.com{placeName}`; // Идеальный дефолт для ПК

  if (isIOS) {
    // Для Айфонов: заставит Apple Maps открыть поиск по названию И привязать его к точным координатам
    routeLink = `maps://?q=${placeName}&ll=${latLng}`;
  } else if (isAndroid) {
    // Для Андроид: заставит Google Maps (или Яндекс) открыть полноценную карточку места, а не просто точку
    routeLink = `https://google.com{placeName}`;
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
                {/* ИСПРАВЛЕНО: добавили target="_blank" и rel, чтобы не ломало вкладку */}
                <a 
                  href={routeLink} 
                  className="route-link"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
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
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">@gym_one_minsk</a>
              </div>    
            </li>
            <li className="contact-item">
              <FaTelegramPlane className="contact-icon" />
              <div className="contact-text">
                <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="social-link">ONE тренажерный зал</a>
              </div>    
            </li>
          </ul>
        </div>

        {/* БЛОК КАРТЫ */}
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
