import React from 'react';
import './Services.css';

// Импортируй сюда свои фотки из папки с ассетами
// import photoExtra1 from './assets/images/test.jpg';

const SERVICES = [
  // Дополнительные услуги
  { id: 1, name: 'Восстановление карты', img: 'https://placehold.co/600x400' },
  { id: 2, name: 'Доплата за посещение вечером', img: 'https://placehold.co/600x400' },
  { id: 3, name: 'Единоразовое переоформление карты', img: 'https://placehold.co/600x400' },
  { id: 4, name: 'Единоразовая дополнительная заморозка', img: 'https://placehold.co/600x400' },
  
  // Услуги инструктора
  { id: 5, name: 'Персональная тренировка с инструктором', img: 'https://placehold.co/600x400' },
  { id: 6, name: 'Персональная тренировка (сплит)', img: 'https://placehold.co/600x400' },
  { id: 7, name: 'Консультация по питанию', img: 'https://placehold.co/600x400' },
  { id: 8, name: 'Консультация по тренировочному процессу', img: 'https://placehold.co/600x400' },
  { id: 9, name: 'Расчёт КБЖУ под цель', img: 'https://placehold.co/600x400' },
];

export default function Services() {
  return (
    <section className="services-section">
      <div className="services-container">
        
        {/* Главный заголовок сверху по центру */}
        <h2 className="services-main-title">Услуги</h2>

        {/* Сетка из блоков (карточек) */}
        <div className="services-grid">
          {SERVICES.map((service) => (
            <div className="service-card" key={service.id}>
              {/* Задний фон-картинка */}
              <img 
                src={service.img} 
                alt={service.name} 
                className="service-card-bg" 
              />
              {/* Затемняющий оверлей, чтобы белый текст читался на любом фото */}
              <div className="service-card-overlay"></div>
              
              {/* Контент карточки (текст снизу слева) */}
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
