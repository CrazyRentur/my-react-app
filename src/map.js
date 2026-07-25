// для яндекс карты 
import React, { useEffect } from 'react';

export default function MyMap() {
  useEffect(() => {
    // Ждем, пока скрипт из index.html полностью загрузится
    if (window.ymaps) {
      window.ymaps.ready(() => {
        // Очищаем контейнер перед созданием новой карты
        const container = document.getElementById('yandex-map');
        if (container) container.innerHTML = '';

        // Создаем карту на ул. Гамарника, 30А
        const map = new window.ymaps.Map('yandex-map', {
          center: [53.957162, 27.606257], // Минск
          zoom: 15,
          controls: ['zoomControl', 'fullscreenControl']
        });

        // Добавляем метку зала
        const placemark = new window.ymaps.Placemark([53.957162, 27.606257], {
          balloonContent: 'Тренажерный зал ONE'
        });

        map.geoObjects.add(placemark);
      });
    }
  }, []);

  // Выводим обычный блок div, в который Яндекс сам вставит карту
  return <div id="yandex-map" style={{ width: '100%', height: '100%' }} />;
}


// import React from 'react';

// export default function MyMap() {
//   return (
//     <iframe 
//       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1974.064137879137!2d27.605158051285258!3d53.95712519130681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfac8bab2d05%3A0xee63b97d81b22d2!2zT05FINCi0YDQtdC90LDQttC10YDQvdGL0Lkg0LfQsNC7!5e0!3m2!1sru!2sby!4v1784029888584!5m2!1sru!2sby" 
//       width="100%" 
//       height="100%" 
//       style={{ border: 0 }} 
//       allowFullScreen="" 
//       loading="lazy" 
//       referrerPolicy="strict-origin-when-cross-origin"
//       title="Тренажерный зал ONE на карте Google"
//     />
//   );
// }