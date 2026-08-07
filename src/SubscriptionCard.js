import React from 'react';
import "./SubscriptionCard.css";
// Путь к иконке сохранен как у вас в проекте
import bynIcon from './assets/icons/BYN.svg'; 

export default function SubscriptionCard({ duration, price, pricePerMonth, pricePerPerson, badgeText, badgeColor, isDark, features, subText }) {
  
  // По умолчанию крупной является базовая цена, а снизу ничего нет
  let displayPrice = price;
  let displaySubText = null;
  let subHeaderLabel = subText;
  let pricePeriod = null; // Переменная для приставки справа от иконки

  // ЛОГИКА РОКИРОВКИ:
  if (pricePerMonth) {
    displayPrice = pricePerMonth; // Месячная цена становится КРУПНОЙ
    subHeaderLabel = 'цена за мес.'; // Динамический подзаголовок в шапке
    pricePeriod = '/мес'; // Добавляем приставку
    displaySubText = (
      <>
        {price} <img src={bynIcon} alt="BYN" className="price-sub-icon" /> всего
      </>
    );
  } 
  else if (pricePerPerson) {
    displayPrice = pricePerPerson; // Цена за человека становится КРУПНОЙ
    subHeaderLabel = 'цена за чел.'; // Динамический подзаголовок в шапке
    pricePeriod = '/чел'; // Добавляем приставку
    displaySubText = (
      <>
        {price} <img src={bynIcon} alt="BYN" className="price-sub-icon" /> за всех
      </>
    );
  }

  return (
    <div className={`sub-card ${isDark ? 'sub-card-dark' : ''}`}>
      
      {badgeText && (
        <span className={`sub-card-badge ${badgeColor === 'red' ? 'badge-red' : 'badge-blue'}`}>
          {badgeText}
        </span>
      )}
      
      <div className="sub-card-header">
        <h3>{duration}</h3>
        {/* Выводим динамический текст (БЕЗЛИМИТ, Безлимит / мес. или Семейный / чел.) */}
        <p>{subHeaderLabel}</p>
      </div>

      <div className="sub-card-price-container">
        {/* ГЛАВНАЯ ЦЕНА (Крупная) */}
        <div className="sub-card-price">
          <span className="price-num">{displayPrice}</span>
          <img src={bynIcon} alt="BYN" className="price-currency-icon" />
          
          {/* ДОБАВЛЕНО: Текстовая приставка справа от иконки */}
          {pricePeriod && (
            <span className="price-period-label">{pricePeriod}</span>
          )}
        </div>
        
        {/* МЕЛКАЯ ПОДПИСЬ СНИЗУ (Появится только если была рокировка) */}
        {displaySubText && (
          <div className="price-per-month">
            {displaySubText}
          </div>
        )}
      </div>

      {/* Список преимуществ с проверкой на массив */}
      <ul className="sub-card-features">
        {Array.isArray(features) ? (
          features.map((feature, index) => (
            <li key={index}>✓ {feature}</li>
          ))
        ) : (
          <li>✓ Информация уточняется</li>
        )}
      </ul>

      <button className="sub-card-btn">КУПИТЬ</button>
    </div>
  );
}
