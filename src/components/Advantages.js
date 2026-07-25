import { FaDumbbell, FaCar, FaWallet, FaSmile, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

function Advantages() {
  const advantages = [
    { icon: <FaDumbbell />, title: 'Премиальное оборудование', desc: 'Matrix и Panatta' },
    { icon: <FaCar />, title: 'Удобная парковка', desc: 'Всегда есть место' },
    { icon: <FaWallet />, title: 'Понятные цены', desc: 'Без переплат' },
    { icon: <FaSmile />, title: 'Комфортная атмосфера', desc: 'Дружелюбная и спокойная' },
    { icon: <FaMapMarkerAlt />, title: 'Удобное расположение', desc: 'Зеленый Луг' },
    { icon: <FaClock />, title: 'Работаем ежедневно', desc: (<>буд С 08.00 до 23.00<br />вых с 09:00 до 21:00</>)}
  ];

  return (
    <section className="advantages-section">
      <div className="advantages-container">
        {advantages.map((item, index) => (
          <div key={index} className="advantage-card">
            <div className="advantage-icon">{item.icon}</div>
            <h4 className="advantage-title">{item.title}</h4>
            <p className="advantage-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Advantages;