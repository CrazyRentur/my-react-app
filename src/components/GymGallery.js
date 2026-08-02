import React, { useState, useEffect } from 'react';
// Эти импорты остаются для стартовой сетки (плитки на самой странице)
import photoLarge from '../assets/images/test.jpg';     
import photoLocker from '../assets/images/test.jpg';   
import photoShower from '../assets/images/test.jpg';   
import photoReception from '../assets/images/test.jpg';
import photoBoxing from '../assets/images/test.jpg';   

function GymGallery() {
  const [isOpen, setIsOpen] = useState(false);
  // Теперь храним ТУТ ИНДЕКС (число) открытой фотографии. null — если закрыто.
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);

  const middlePhotos = [photoLocker, photoShower];
  const rightPhotos = [photoBoxing, photoReception];

  // Автоматическая загрузка картинок из папки gallery
  let allPhotos = [];
  try {
    const context = require.context(
      '../assets/gallery', 
      false, 
      /\.(jpg|jpeg|png|webp)$/i
    );
    allPhotos = context.keys().map((path) => context(path));
  } catch (error) {
    console.error("Ошибка автозагрузки из папки assets/gallery:", error);
  }

  // Листалка: функция для перехода на предыдущее/следующее фото
  const handlePrevPhoto = (e) => {
    e.stopPropagation(); // Чтобы клик по стрелке не закрывал полноэкранный режим
    setActivePhotoIndex((prevIndex) => 
      prevIndex === 0 ? allPhotos.length - 1 : prevIndex - 1
    );
  };

  const handleNextPhoto = (e) => {
    e.stopPropagation(); // Чтобы клик по стрелке не закрывал полноэкранный режим
    setActivePhotoIndex((prevIndex) => 
      prevIndex === allPhotos.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Слушатель клавиатуры для удобного перелистывания стрелочками
  useEffect(() => {
    if (activePhotoIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        setActivePhotoIndex((prev) => (prev === allPhotos.length - 1 ? 0 : prev + 1));
      } else if (e.key === 'ArrowLeft') {
        setActivePhotoIndex((prev) => (prev === 0 ? allPhotos.length - 1 : prev - 1));
      } else if (e.key === 'Escape') {
        setActivePhotoIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIndex, allPhotos.length]);

  // Блокировка прокрутки основного сайта при открытой галерее
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => document.body.classList.remove('modal-open');
  }, [isOpen]);

  return (
    <section className="about-gym-section">
      <div className="about-gym-container">
        <div className="about-gym-info">
          <h2 className="section-title">
            Современный зал<br />для твоих целей
          </h2>
          <p className="section-text">
            Уютный тренажерный зал, просторные раздевалки, душевые и
            зона функционального тренинга — всё для вашего комфорта и результата.
          </p>
          <button className="btn-secondary" onClick={() => setIsOpen(true)}>
            СМОТРЕТЬ ВСЕ ФОТО
          </button>
        </div>

        <div className="gym-photos-grid">
          <div className="photo-col-large">
            <div className="gym-photo-item large-photo">
              <img src={photoLarge} alt="Большой зал" />
            </div>
          </div>

          <div className="photo-col-small">
            {middlePhotos.map((photo, index) => (
              <div key={index} className="gym-photo-item small-photo">
                <img src={photo} alt="Фото зала" />
              </div>
            ))}
          </div>

          <div className="photo-col-small">
            {rightPhotos.map((photo, index) => (
              <div key={index} className="gym-photo-item small-photo">
                <img src={photo} alt="Фото зала" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 1-Й УРОВЕНЬ: Модальное окно со всей флекс-сеткой картинок */}
      {isOpen && (
        <div className="gallery-overlay" onClick={() => setIsOpen(false)}>
          <div className="gallery-modal" onClick={(e) => e.stopPropagation()}>
            <div className="gallery-header">
              <h3 className="gallery-modal-title">Все фотографии ({allPhotos.length})</h3>
              <button className="close-modal-btn" onClick={() => setIsOpen(false)}>&times;</button>
            </div>

            <div className="gallery-scroll-container">
              {allPhotos.map((photo, index) => (
                <div 
                  key={index} 
                  className="gallery-modal-item" 
                  onClick={() => setActivePhotoIndex(index)} // Передаем индекс фотки
                  style={{ cursor: 'zoom-in' }}
                >
                  <img src={photo} alt={`Фото зала ${index + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 2-Й УРОВЕНЬ: Полноэкранный просмотр со стрелочками */}
      {activePhotoIndex !== null && (
        <div 
          className="fullscreen-viewer-overlay" 
          onClick={() => setActivePhotoIndex(null)}
        >
          {/* Верхняя кнопка закрытия */}
          <button className="fullscreen-close-btn" onClick={() => setActivePhotoIndex(null)}>
            &times;
          </button>

          {/* Стрелка Назад */}
          <button className="gallery-arrow-btn arrow-left" onClick={handlePrevPhoto}>
            &#10094;
          </button>

          {/* Обертка картинки */}
          <div className="fullscreen-image-wrapper" onClick={(e) => e.stopPropagation()}>
            <img src={allPhotos[activePhotoIndex]} alt="Фото крупным планом" />
          </div>

          {/* Стрелка Вперед */}
          <button className="gallery-arrow-btn arrow-right" onClick={handleNextPhoto}>
            &#10095;
          </button>
        </div>
      )}
    </section>
  );
}

export default GymGallery;
