import { FaStar, FaUsers, FaTag } from 'react-icons/fa';

function StatsPanel() {
  const stats = [
    { icon: <FaStar className="panel-icon icon-star" />, text: 'более 7 лет работы' },
    { icon: <FaUsers className="panel-icon icon-users" />, text: '1000+ клиентов' },
    { icon: <FaTag className="panel-icon icon-tag" />, text: 'от 80 BYN в месяц' },
  ];

  return (
    <div className="gym-panel-bottom">
      <div className="gym-panel-wrapper">
        <div className="gym-panel-items-row">
          {stats.map((item, index) => (
            <div key={index} className="gym-panel-node">
              {item.icon} {item.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StatsPanel;