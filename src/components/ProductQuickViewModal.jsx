import { FiCheckCircle, FiMinus, FiPlus, FiShoppingBag } from 'react-icons/fi';
import { formatCurrency } from '../services/formatters';
import ModalShell from './ModalShell';

function ProductQuickViewModal({
  product,
  quantity,
  onAddToCart,
  onClose,
  onDecreaseQuantity,
  onIncreaseQuantity,
}) {
  return (
    <ModalShell
      isOpen={Boolean(product)}
      onClose={onClose}
      label={product ? `${product.name} details` : 'Product details'}
    >
      {product ? (
        <div className="product-modal-layout">
          <div className="product-modal-image">
            <img src={product.image} alt={product.imageAlt} />
          </div>

          <div className="product-modal-copy">
            <span className="eyebrow">{product.badge}</span>
            <h2>{product.name}</h2>
            <div className="modal-price-row">
              <strong>{formatCurrency(product.price)}</strong>
              <span>/ {product.unit}</span>
            </div>
            <p>{product.description}</p>

            <div className="modal-detail-grid">
              <article className="detail-card">
                <span>Origin</span>
                <strong>{product.origin}</strong>
              </article>
              <article className="detail-card">
                <span>Availability</span>
                <strong>{product.availability}</strong>
              </article>
            </div>

            <div className="note-card">
              <FiCheckCircle />
              <div>
                <strong>Storage tip</strong>
                <p>{product.storageTip}</p>
              </div>
            </div>

            <div className="pill-list">
              {product.tags.map((tag) => (
                <span key={tag} className="pill pill-accent">
                  {tag}
                </span>
              ))}
            </div>

            <div className="product-modal-actions">
              <div className="quantity-control">
                <button
                  className="qty-button"
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={onDecreaseQuantity}
                >
                  <FiMinus />
                </button>
                <span>{quantity}</span>
                <button
                  className="qty-button"
                  type="button"
                  aria-label="Increase quantity"
                  onClick={onIncreaseQuantity}
                >
                  <FiPlus />
                </button>
              </div>

              <button className="button button-primary" type="button" onClick={onAddToCart}>
                <FiShoppingBag />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </ModalShell>
  );
}

export default ProductQuickViewModal;
