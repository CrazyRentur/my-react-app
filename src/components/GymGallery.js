import photoLarge from '../assets/images/test.jpg';     // ← ../assets
import photoLocker from '../assets/images/test.jpg';   // ← ../assets
import photoShower from '../assets/images/test.jpg';   // ← ../assets
import photoReception from '../assets/images/test.jpg';// ← ../assets
import photoBoxing from '../assets/images/test.jpg';   // ← ../assets

function GymGallery() {
  const middlePhotos = [photoLocker, photoShower];
  const rightPhotos = [photoReception, photoBoxing];

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
          <button className="btn-secondary">СМОТРЕТЬ ВСЕ ФОТО</button>
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
    </section>
  );
}

export default GymGallery;