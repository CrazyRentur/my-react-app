import React from 'react';
import './Services.css';
import { 
  FaRegIdCard, 
  FaRegClock, 
  FaSync,   // Замена для переоформления (символизирует смену пользователя)
  FaSnowflake, 
  FaChild, 
  FaUsers, 
  FaAppleAlt, 
  FaClipboardList, 
  FaCalculator 
} from 'react-icons/fa';

const SERVICES = [
  // Дополнительные услуги
  { id: 1, name: 'Восстановление карты', icon: <FaRegIdCard /> },
  { id: 2, name: 'Доплата за посещение вечером', icon: <FaRegClock /> },
  { id: 3, name: 'Единоразовое переоформление карты', icon: <FaSync /> }, // Рабочая иконка из 'fa'
  { id: 4, name: 'Единоразовая дополнительная заморозка', icon: <FaSnowflake /> },
  
  // Услуги инструктора
  { id: 5, name: 'Персональная тренировка с инструктором', icon: <FaChild /> },
  { id: 6, name: 'Персональная тренировка (сплит)', icon: <FaUsers /> },
  { id: 7, name: 'Консультация по питанию', icon: <FaAppleAlt /> },
  { id: 8, name: 'Консультация по тренировочному процессу', icon: <FaClipboardList /> },
  { id: 9, name: 'Расчёт КБЖУ под цель', icon: <FaCalculator /> },
];


export default function Services() {
  return (
    <section id='services' className="services-section">
      <div className="services-container">
        
        {/* Главный заголовок сверху по центру */}
        <h2 className="services-main-title">Услуги</h2>

        {/* Сетка из блоков (карточек) */}
        <div className="services-grid">
          {SERVICES.map((service) => (
            <div className="service-card" key={service.id}>
              
              {/* Контейнер для иконки */}
              <div className="service-card-icon">
                {service.icon}
              </div>
              
              {/* Контент карточки (текст) */}
              <div className="service-card-content">
                <h3 className="service-card-name">{service.name}</h3>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
