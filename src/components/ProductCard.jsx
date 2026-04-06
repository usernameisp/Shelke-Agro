import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { formatCurrency } from '../services/formatters';

function ProductCard({
  cartQuantity = 0,
  product,
  onOrder,
  onViewDetails,
  actionLabel = 'View Details',
  orderLabel = 'Order Now',
}) {
  const isInCart = cartQuantity > 0;

  const handleCardKeyDown = (event) => {
    if (!onViewDetails) {
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onViewDetails();
    }
  };

  const handleOrderClick = (event) => {
    event.stopPropagation();
    onOrder?.();
  };

  const handleViewDetailsClick = (event) => {
    event.stopPropagation();
    onViewDetails?.();
  };

  return (
    <article
      className={`product-card${onViewDetails ? ' is-clickable' : ''}`}
      role={onViewDetails ? 'button' : undefined}
      tabIndex={onViewDetails ? 0 : undefined}
      aria-label={onViewDetails ? `View details for ${product.name}` : undefined}
      onClick={onViewDetails}
      onKeyDown={handleCardKeyDown}
    >
      <div className="product-image-wrap">
        <img className="product-image" src={product.image} alt={product.imageAlt} loading="lazy" />
        <span className="product-badge">{product.badge}</span>
      </div>

      <div className="product-card-body">
        <div className="product-meta">
          <div>
            <h3>{product.name}</h3>
            <p>{product.shortDescription}</p>
          </div>
          <div className="product-price">
            <strong>{formatCurrency(product.price)}</strong>
            <span>/ {product.unit}</span>
          </div>
        </div>

        <div className="pill-list">
          {product.tags.map((tag) => (
            <span key={tag} className="pill">
              {tag}
            </span>
          ))}
          {isInCart ? <span className="pill pill-accent">In basket: {cartQuantity}</span> : null}
        </div>

        <div className="product-card-actions">
          {onOrder ? (
            <button
              className={`button ${isInCart ? 'button-secondary' : 'button-primary'} product-order-button${
                isInCart ? ' is-added' : ''
              }`}
              type="button"
              onClick={handleOrderClick}
              disabled={isInCart}
            >
              {isInCart ? <FiCheck /> : null}
              {isInCart ? 'Added to Cart' : orderLabel}
            </button>
          ) : null}

          {onViewDetails ? (
            <button className="link-button" type="button" onClick={handleViewDetailsClick}>
              {actionLabel}
              <FiArrowRight />
            </button>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
