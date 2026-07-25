import arrow from '../assets/icons/right-arrow.svg';  // ← ../assets

function Hero() {
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
        <button className="subscription">
          Купить абонемент <img src={arrow} className="arrow" alt="arrow" />
        </button>

        <button className="subscription2">
          Получить консультацию
          <span className="btn-msg-icon">💬</span>
        </button>
      </div>
    </div>
  );
}

export default Hero;