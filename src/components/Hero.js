import React from 'react';
import arrow from '../assets/icons/right-arrow.svg';  // ← ../assets

function Hero() {
  // Функция для плавного перехода к абонементам
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  return (
    <div className="hero-content">
      <p className="hero-subtitle">Тренажерный зал в Зеленом Лугу</p>

      <h1 className="hero-title">
        Место, где <br />
        ты становишься<br />
        <span className="blue-text">сильнее</span>
      </h1>

      <p className="hero-subtitle2">
        Премиальное оборудование Matrix и Panatta <br />
        без сложных подписок и скрытых условий
      </p>

      <div className="block-subscription">
        {/* Добавили onClick для вызова плавной прокрутки */}
        <button className="subscription" onClick={scrollToPricing}>
          Aбонементы <img src={arrow} className="arrow" alt="arrow" />
        </button>

        <a href="https://t.me/+NMl8Zh9GTHZiYTRi" className="subscription2">
          Получить консультацию
          <span className="btn-msg-icon">💬</span>
        </a>
      </div>
    </div>
  );
}

export default Hero;
