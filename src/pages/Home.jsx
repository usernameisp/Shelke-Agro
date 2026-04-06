import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight, FiAward, FiFeather, FiShield, FiTruck } from 'react-icons/fi';
import FeaturedVideo from '../components/FeaturedVideo';
import ProductCard from '../components/ProductCard';
import ProductQuickViewModal from '../components/ProductQuickViewModal';
import { useCart } from '../context/CartContext';
import SectionIntro from '../components/SectionIntro';
import {
  aboutPreview,
  companyInfo,
  homeHero,
  homeStats,
  pageImages,
  products,
  promisePoints,
  seasonalJourney,
} from '../services/farmData';

const iconMap = {
  award: FiAward,
  feather: FiFeather,
  shield: FiShield,
  truck: FiTruck,
};

function Home() {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (selectedProduct) {
      setQuantity(1);
    }
  }, [selectedProduct]);

  const handleAddToCart = () => {
    if (!selectedProduct) {
      return;
    }

    addToCart(selectedProduct, quantity);
    setSelectedProduct(null);
  };

  const handleOrderNow = (product) => {
    addToCart(product, 1);
  };

  return (
    <>
      <section className="section hero-section">
        <div className="container hero-layout">
          <div className="hero-copy">
            <span className="eyebrow">{homeHero.eyebrow}</span>
            <h1>{companyInfo.heroTagline}</h1>
            <p>{homeHero.description}</p>

            <div className="hero-actions">
              <button className="button button-primary" type="button" onClick={() => navigate('/products')}>
                Explore Harvest
                <FiArrowRight />
              </button>
              <button
                className="button button-secondary"
                type="button"
                onClick={() => navigate('/contact')}
              >
                Request Order
              </button>
            </div>

            <div className="hero-metrics">
              {homeStats.map((stat) => (
                <article key={stat.label} className="metric-card">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-card">
              <img src={pageImages.homeHero.url} alt={pageImages.homeHero.alt} loading="eager" />
            </div>

            <div className="floating-detail floating-detail-top">
              <span>{homeHero.topCard.label}</span>
              <strong>{homeHero.topCard.value}</strong>
              <p>{homeHero.topCard.text}</p>
            </div>

            <div className="floating-detail floating-detail-bottom">
              <span>{homeHero.bottomCard.label}</span>
              <strong>{homeHero.bottomCard.value}</strong>
              <p>{homeHero.bottomCard.text}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container section-surface">
          <SectionIntro
            eyebrow="The Pillars of Our Practice"
            title="Uncompromising standards that define our approach to organic agriculture"
            description="Our methods combine purity, precision, and responsible stewardship at every stage of cultivation."
            align="center"
          />

          <div className="info-grid">
            {promisePoints.map((point) => {
              const Icon = iconMap[point.icon];

              return (
                <article key={point.title} className="info-card">
                  <div className="icon-badge">
                    <Icon />
                  </div>
                  <h3>{point.title}</h3>
                  <p>{point.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Curated Harvest"
            title="Exceptional Offerings"
            description="Explore our selection of premium organic produce, grown with care and delivered fresh."
          />

          <div className="product-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOrder={() => handleOrderNow(product)}
                actionLabel="View Details"
                onViewDetails={() => setSelectedProduct(product)}
              />
            ))}
          </div>
        </div>
      </section>

      <ProductQuickViewModal
        product={selectedProduct}
        quantity={quantity}
        onClose={() => setSelectedProduct(null)}
        onDecreaseQuantity={() => setQuantity((currentQuantity) => Math.max(1, currentQuantity - 1))}
        onIncreaseQuantity={() => setQuantity((currentQuantity) => currentQuantity + 1)}
        onAddToCart={handleAddToCart}
      />

      <section className="section">
        <div className="container story-grid">
          <div className="story-card">
            <span className="eyebrow">Discover Our Roots</span>
            <h2>{aboutPreview.title}</h2>
            <p>{aboutPreview.description}</p>

            <div className="journey-list">
              {seasonalJourney.map((step) => (
                <article key={step.title} className="journey-item">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>

            <div className="story-actions">
              <button className="button button-primary" type="button" onClick={() => navigate('/about')}>
                Discover Our Roots
              </button>
              <button className="button button-secondary" type="button" onClick={() => navigate('/gallery')}>
                Explore Full Gallery
              </button>
            </div>
          </div>

          <div className="story-image-stack">
            <FeaturedVideo
              compact
              showIntro={false}
              className="story-video-card"
              videoTitle="Shelke Agro Discover Our Roots video"
            />
            <div className="story-image-card">
              <img
                src={aboutPreview.secondaryImage.url}
                alt={aboutPreview.secondaryImage.alt}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
