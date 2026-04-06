import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import ModalShell from '../components/ModalShell';
import PageHero from '../components/PageHero';
import SectionIntro from '../components/SectionIntro';
import { galleryImages, pageImages } from '../services/farmData';

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const activeImage = activeIndex === null ? null : galleryImages[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1,
    );
  };

  const goToNext = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1,
    );
  };

  return (
    <>
      <PageHero
        eyebrow="Our Gallery"
        title="Explore the beauty of our farm"
        description="A visual collection that captures the essence of sustainable agriculture and daily life at Shelke Organic Farm."
        image={pageImages.galleryHero}
      />

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Visual Essay"
            title="Glimpses of life, growth, and beauty from within the farm"
            description="Open any image for a larger look at the people, produce, and processes behind our harvests."
          />

          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <button
                key={`${image.title}-${index}`}
                className={`gallery-card ${image.layout}`.trim()}
                type="button"
                aria-label={`Open ${image.title}`}
                onClick={() => setActiveIndex(index)}
              >
                <img src={image.image} alt={image.title} loading="lazy" />
                <div className="gallery-card-content">
                  <span className="gallery-label">Tap to expand</span>
                  <h3>{image.title}</h3>
                  <p>{image.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <ModalShell
        isOpen={activeIndex !== null}
        onClose={() => setActiveIndex(null)}
        label={activeImage ? activeImage.title : 'Gallery lightbox'}
        className="lightbox-shell"
      >
        {activeImage ? (
          <div className="lightbox-layout">
            <div className="lightbox-image-wrap">
              <img src={activeImage.image} alt={activeImage.title} />
            </div>
            <div className="lightbox-copy">
              <span className="eyebrow">Gallery image</span>
              <h2>{activeImage.title}</h2>
              <p>{activeImage.description}</p>

              <div className="lightbox-toolbar">
                <button className="button button-secondary" type="button" onClick={goToPrevious}>
                  <FiChevronLeft />
                  Previous
                </button>
                <button className="button button-primary" type="button" onClick={goToNext}>
                  Next
                  <FiChevronRight />
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </ModalShell>
    </>
  );
}

export default Gallery;
