import React, { useState } from 'react';
import SubscriptionCard from '../SubscriptionCard'; 
import './Subscriptions.css'; // ПОДКЛЮЧАЕМ ВНЕШНИЙ CSS

const subscriptionsData = [
  { id: 1, category: 'count', duration: 'РАЗОВОЕ ПОСЕЩЕНИЕ', price: '25', features: ['Разовое посещение', 'Доступ: Весь день', 'Действует в день покупки и предоставляет разовый доступ в тренажёрный зал'] },
  { id: 2, category: 'count', duration: '30 дней ', price: '95', features: ['Доступ: Весь день', 'Сгорают через 30 дней', '1 гостевой визит'] , subText:'8 ПОСЕЩЕНИЙ' },
  { id: 3, category: 'morning', duration: '1 МЕСЯЦ', price: '80', features: ['Безлимит утро', 'Доступ: До 17:00', '1 гостевой визит'] },
  { id: 4, category: 'morning', duration: '3 МЕСЯЦА', price: '210', pricePerMonth: '70', badgeText: 'ВЫГОДНО', badgeColor: 'blue', features: ['Безлимит утро', 'Доступ: До 17:00', 'Заморозка: 7 дней', '3 гостевых визита'] },
  { id: 5, category: 'morning', duration: '12 МЕСЯЦЕВ', price: '820', pricePerMonth: '68.33', badgeText: 'МАКСИМАЛЬНАЯ ВЫГОДА', badgeColor: 'red', isDark: true, features: ['Безлимит утро', 'Доступ: До 17:00', 'Заморозка: 12 дней', '12 гостевых визитов'] },
  { id: 6, category: 'full-day', duration: '1 МЕСЯЦ', price: '100', features: ['Безлимит весь день', 'Доступ: Весь день', '1 гостевой визит'] },
  { id: 7, category: 'full-day', duration: '3 МЕСЯЦА', price: '265', pricePerMonth: '88,3', badgeText: 'ВЫГОДНО', badgeColor: 'blue', features: ['Безлимит весь день', 'Доступ: Весь день', 'Заморозка: 7 дней', '3 гостевых визита'] },
  { id: 8, category: 'full-day', duration: '1 ГОД', price: '1030', pricePerMonth: '85.83', badgeText: 'МАКСИМАЛЬНАЯ ВЫГОДА', badgeColor: 'red', isDark: true, features: ['Безлимит весь день', 'Доступ: Весь день', 'Заморозка: 12 дней', '12 гостевых визитов'] },
  { id: 9, category: 'family', duration: 'СЕМЕЙНЫЙ УТРО — 2 ЧЕЛОВЕКА', price: '145', pricePerPerson:'72.5', features: ['1 МЕСЯЦ (2 чел)', 'Доступ: До 17:00', 'Родственники, подтверждение'] },
  { id: 10, category: 'family', duration: 'СЕМЕЙНЫЙ УТРО — 3 ЧЕЛОВЕКА', price: '215', pricePerPerson:'71.66', features: ['1 МЕСЯЦ (3 чел)', 'Доступ: До 17:00', 'Родственники, подтверждение'] },
  { id: 11, category: 'family', duration: 'СЕМЕЙНЫЙ ВЕСЬ ДЕНЬ — 2 ЧЕЛОВЕКА', price: '185', pricePerPerson:'92.5', features: ['1 МЕСЯЦ (2 чел)', 'Доступ: Весь день', 'Родственники, подтверждение'] },
  { id: 12, category: 'family', duration: 'СЕМЕЙНЫЙ ВЕСЬ ДЕНЬ — 3 ЧЕЛОВЕКА', price: '270', pricePerPerson:'90', features: ['1 МЕСЯЦ (3 чел)', 'Доступ: Весь день', 'Родственники, подтверждение'] },
  { id: 13, category: 'student', duration: 'СТУДЕНЧЕСКИЙ — 1 МЕСЯЦ', price: '75', features: ['Доступ: 12:00–17:00', 'Требования для получения данного абоминента:Студ. билет, школьный и другие'] }
];

const categories = [
  { id: 'count', name: 'На количество посещений' },
  { id: 'morning', name: 'Безлимит утро до 17:00' },
  { id: 'full-day', name: 'Безлимит весь день' },
  { id: 'family', name: 'Семейные' },
  { id: 'student', name: 'Учебные' }
];

export default function Subscriptions() {
  const [activeCategory, setActiveCategory] = useState('count');
  const filteredCards = subscriptionsData.filter(sub => sub.category === activeCategory);

  return (
    <section className="sub-section">
      <h2>Тарифы и абонементы</h2>
      
      <div className="sub-container">
        {/* Карточки */}
        <div className="sub-cards-grid">
          {filteredCards.map(sub => (
            <SubscriptionCard 
              key={sub.id}
              duration={sub.duration}
              price={sub.price}
              pricePerMonth={sub.pricePerMonth}
              pricePerPerson={sub.pricePerPerson} // Передаем цену за человека
              badgeText={sub.badgeText}
              badgeColor={sub.badgeColor}
              isDark={sub.isDark}
              features={sub.features}
              subText={sub.subText}
            />
          ))}
        </div>

        {/* Правая панель кнопок-переключателей */}
        <aside className="sub-filter-panel">
          <h4>Категории</h4>
          <div className="filter-list">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              >
                {cat.name}
              </button>
            ))}
          </div>
          {/* НОВАЯ ПОМЕТКА СНИЗУ */}
          <p className="filter-panel-note">
            Для абонентов на утро занятие необходимо завершить до 17:00
          </p>
        </aside>
      </div>
    </section>
  );
}
