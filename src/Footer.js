import React from 'react';
import './Footer.css';
import gymBuilding from './assets/images/IMG_6756.JPG'; // Правильный импорт картинки

// 1. ИМПОРТИРУЕМ ВАШУ КАРТУ
import MyMap from './map';

import { FaMapMarkerAlt, FaRegClock, FaPhoneAlt, FaInstagram, FaTelegramPlane} from 'react-icons/fa';

export default function Footer() {
  // Прямые ссылки на карточки заведения, которые железно откроются на ПК и в приложениях на телефонах
  const yandexLink = "https://yandex.by/maps/org/one/29243496810/?ll=27.605762%2C53.956936&mode=search&sctx=ZAAAAAgCEAAaKAoSCQXhCijUjztAER%2Faxwp%2B80pAEhIJiXlW0opv3D8Rk40HW%2Bz2yz8iBgABAgMEBSgKOABAtZ4GSAFqAnVhnQHNzMw9oAEAqAEAvQG1yOecwgEP342ahgXqsrH4bPG7%2BIFJggIb0JzQuNC90YHQuiDRhNC40YLQvdC10YEgb25ligIAkgIDMTU3mgIMZGVza3RvcC1tYXBz&sll=27.606195%2C53.956936&sspn=0.002197%2C0.001079&text=Минск%20фитнес%20one&z=19.25";
  const googleLink = "https://maps.app.goo.gl/xXaAgp3ZyZokLeDu6";

  return (
    <footer id='contacts' className="footer-container">
      <div className="footer-content">
        
        {/* Блок контактов и юр. информации */}
        <div className="footer-contacts">
          <h3 className="footer-title">КАК НАС НАЙТИ</h3>
          
          <ul className="contacts-list">
            <li className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div className="contact-text">
                <p>г. Минск, ул. Гамарника, 30А</p>
                
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

          {/* ДОБАВЛЕНО: Блок юридической информации */}
          <div className="footer-legal-info">
            <h4 className="legal-title">ЮР. ИНФОРМАЦИЯ</h4>
            <p className="legal-text">
              ИП МАМЕДОВ РАШАД АГАВЕРДИ ОГЛЫ.<br />
              УНП 490626078<br />
              Юр. адрес: Беларусь, г. Гомель,<br />
              ул. Мазурова 87, 246006
            </p>
          </div>
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
