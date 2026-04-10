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
  const { addToCart, cartItems } = useCart();

  useEffect(() => {
    if (selectedProduct) {
      setQuantity(1);
    }
  }, [selectedProduct]);

  const getCartQuantity = (productId) =>
    cartItems.find((item) => item.id === productId)?.quantity ?? 0;

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
        title="Four premium organic fruits, grown with care and delivered fresh"
        description="Browse our focused fruit collection of grapes, banana, jambhul, and Keshar Amba."
        image={pageImages.productsHero}
      />

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Curated Harvest"
            title="Our four-fruit organic selection"
            description="Open any fruit to view more details, pricing, and storage guidance."
          />

          <div className="product-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                cartQuantity={getCartQuantity(product.id)}
                product={product}
                onOrder={() => handleOrderNow(product)}
                onViewDetails={() => setSelectedProduct(product)}
              />
            ))}
          </div>
        </div>
      </section>

      <ProductQuickViewModal
        cartQuantity={selectedProduct ? getCartQuantity(selectedProduct.id) : 0}
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
