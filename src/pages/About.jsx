import { FiAward, FiFeather, FiHeart, FiUsers } from 'react-icons/fi';
import PageHero from '../components/PageHero';
import SectionIntro from '../components/SectionIntro';
import {
  farmStory,
  farmValues,
  farmerProfile,
  pageImages,
  seasonalJourney,
} from '../services/farmData';

const iconMap = {
  award: FiAward,
  feather: FiFeather,
  heart: FiHeart,
  users: FiUsers,
};

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Our Farm"
        title="Our Story"
        description="Rooted in tradition and guided by sustainability, Shelke Organic Farm continues to grow with respect for land, soil, and community."
        image={pageImages.aboutHero}
      />

      <section className="section">
        <div className="container story-grid">
          <div className="story-card">
            <span className="eyebrow">Our story</span>
            <h2>{farmStory.headline}</h2>
            {farmStory.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <blockquote className="quote-card">{farmStory.quote}</blockquote>
          </div>

          <div className="story-image-stack">
            <div className="story-image-card story-image-large">
              <img src={farmStory.imagePrimary.url} alt={farmStory.imagePrimary.alt} loading="lazy" />
            </div>
            <div className="story-image-card">
              <img
                src={farmStory.imageSecondary.url}
                alt={farmStory.imageSecondary.alt}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Our Core Values"
            title="The principles that guide everything we do"
            description="These values shape our farming decisions, our customer relationships, and the way we care for the land."
            align="center"
          />

          <div className="info-grid">
            {farmValues.map((value) => {
              const Icon = iconMap[value.icon];

              return (
                <article key={value.title} className="info-card">
                  <div className="icon-badge">
                    <Icon />
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container farmer-spotlight">
          <div className="farmer-image-card">
            <img src={farmerProfile.image} alt={farmerProfile.alt} loading="lazy" />
          </div>

          <div className="farmer-copy">
            <span className="eyebrow">Our farm heritage</span>
            <h2>{farmerProfile.name}</h2>
            <p className="farmer-role">{farmerProfile.role}</p>
            <p>{farmerProfile.story}</p>

            <div className="journey-list">
              {farmerProfile.highlights.map((highlight) => (
                <article key={highlight} className="journey-item">
                  <h3>Our Commitment</h3>
                  <p>{highlight}</p>
                </article>
              ))}
            </div>

            <div className="pill-list">
              {seasonalJourney.map((step) => (
                <span key={step.title} className="pill pill-accent">
                  {step.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
