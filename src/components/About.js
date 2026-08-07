import photoAbout from '../assets/images/about-media.jpg';

function About() {
  const features = [
    { title: 'Свои люди', desc: 'Команда профессионалов работает вместе с 2018 года.' },
    { title: 'Премиум-уровень', desc: 'Оборудование Matrix и Panatta на безопасном немецком покрытии.' },
    { title: 'Добрые дела', desc: 'Вместе с вами помогаем животным и собираем помощь для детей.' },
    { title: 'Атмосфера дома', desc: 'Обмениваемся книгами, делимся важным и ценим каждого.' },
  ];

  return (
    <section id='about' className="about-section">
      <div className="about-container">
        
        {/* Левая колонка с текстом */}
        <div className="about-content">
          {/* НАДПИСЬ ТЕПЕРЬ ТУТ — она будет выровнена идеально по левому краю */}
          <span className="about-section-label">О нас</span> 
          <h2 className="about-title">Больше, чем просто фитнес-зал</h2>

          <p className="about-description">
            Мы создали не просто место для тренировок, а живое пространство, где уважают каждого.
            Здесь нет места осуждению и давлению — только поддержка, комфорт и искренняя забота о вас.
          </p>

          <ul className="about-features">
            {features.map((item, index) => (
              <li key={index} className="feature-item">
                <strong>{item.title}</strong>
                <span>{item.desc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Правая колонка с медиа */}
        <div className="about-media">
          <div className="image-wrapper">
            <img src={photoAbout} alt="О нашем зале" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
