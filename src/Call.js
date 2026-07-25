import React, { useState } from 'react';
import { IoCall, IoClose, IoPaperPlane } from 'react-icons/io5'; // Импортируем нужные иконки
import './Call.css';

export default function Call() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Плавающая кнопка */}
      <button className="floating-call-btn" onClick={toggleModal} aria-label="Позвонить">
        <IoCall size={40  } />
      </button>

      {/* Модальное окно */}
      {isOpen && (
        <div className="call-modal-overlay" onClick={toggleModal}>
          <div className="call-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="call-modal-close" onClick={toggleModal}>
              <IoClose size={24} />
            </button>
            
            <h3 className="call-modal-title">Связаться с нами</h3>
            <p className="call-modal-text">Выберите удобный способ связи или позвоните напрямую:</p>
            
            <div className="call-actions" >
              {/* Кнопка звонка */}
              <a href="tel:+375296671855" className="call-link phone-btn" title="+375296671855">
                <IoCall size={18} />
                <span><p>+375 (29) 667-18-55</p></span>
              </a>
              
              {/* Кнопка Телеграма */}
              <a href="https://t.me/OneGymMinsk" target="_blank" rel="noreferrer" className="call-link tg-btn">
                <IoPaperPlane size={18} />
                <span>Написать в Telegram</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
