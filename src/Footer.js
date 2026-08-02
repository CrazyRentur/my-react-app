import React from 'react';
import './Footer.css';
import gymBuilding from './assets/images/test.jpg'; // Правильный импорт картинки

// 1. ИМПОРТИРУЕМ ВАШУ КАРТУ
import MyMap from './map';

import { FaMapMarkerAlt, FaRegClock, FaPhoneAlt, FaInstagram, FaTelegramPlane} from 'react-icons/fa';

export default function Footer() {
  // Прямые ссылки на карточки заведения, которые железно откроются на ПК и в приложениях на телефонах
  const yandexLink = "https://yandex.by/maps/-/CTCMR-ZG";
  const googleLink = "https://maps.app.goo.gl/xXaAgp3ZyZokLeDu6";

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
                
                {/* ИСПРАВЛЕНО: Две раздельные ссылки вместо одной динамической */}
                <div className="route-links-group">
                  <a 
                    href={yandexLink} 
                    className="route-link yandex-btn"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Яндекс Карты
                  </a>
                  <span className="route-separator">|</span>
                  <a 
                    href={googleLink} 
                    className="route-link google-btn"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Google Maps
                  </a>
                </div>
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

        {/* 2. БЛОК КАРТЫ */}
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
