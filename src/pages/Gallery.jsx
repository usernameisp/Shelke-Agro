import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import ModalShell from '../components/ModalShell';
import PageHero from '../components/PageHero';
import SectionIntro from '../components/SectionIntro';
import { featuredVideos, galleryImages, pageImages } from '../services/farmData';

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
        title="Explore the farm and fruit collection"
        description="A visual collection focused on our four featured fruits and the farming work behind them."
        image={pageImages.galleryHero}
      />

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Visual Essay"
            title="Photos from the field and the featured harvest"
            description="Open any image for a larger look at the fruits, people, and farming work shown across the website."
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

      <section className="section section-top-tight">
        <div className="container">
          <SectionIntro
            eyebrow="Video Gallery"
            title="Fruit moments in motion"
            description="Watch a few short fruit clips that complement the photo gallery."
          />

          <div className="video-gallery-grid">
            {featuredVideos.map((video) => (
              <article key={video.id} className="video-gallery-card">
                <div className="video-frame">
                  <video
                    controls
                    controlsList="nodownload noremoteplayback"
                    disablePictureInPicture
                    playsInline
                    preload="metadata"
                    poster={video.poster}
                    onContextMenu={(event) => event.preventDefault()}
                  >
                    <source src={video.videoUrl} type="video/mp4" />
                    Your browser does not support HTML5 video.
                  </video>
                </div>

                <div className="video-gallery-copy">
                  <span className="gallery-label">Video highlight</span>
                  <h3>{video.title}</h3>
                  <p>{video.description}</p>
                </div>
              </article>
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
