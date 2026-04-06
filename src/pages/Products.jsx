import { useEffect, useState } from 'react';
import PageHero from '../components/PageHero';
import ProductCard from '../components/ProductCard';
import ProductQuickViewModal from '../components/ProductQuickViewModal';
import SectionIntro from '../components/SectionIntro';
import { useCart } from '../context/CartContext';
import { pageImages, products } from '../services/farmData';

function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

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
      <PageHero
        eyebrow="Our Products"
        title="Premium organic produce, grown with care and delivered fresh"
        description="Explore our selection of premium fruits, harvested thoughtfully and shared at peak quality."
        image={pageImages.productsHero}
      />

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Curated Harvest"
            title="Our premium organic selection"
            description="Browse the fruits currently featured in our catalog and open any item to view more details."
          />

          <div className="product-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOrder={() => handleOrderNow(product)}
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
    </>
  );
}

export default Products;
