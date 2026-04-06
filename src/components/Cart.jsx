import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiMinus,
  FiPlus,
  FiShoppingBag,
  FiTrash2,
  FiX,
} from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../services/formatters';
import { emailjsOrderConfig, orderContact } from '../services/orderConfig';
import {
  buildOrderEmailParams,
  buildOrderProductSummary,
  buildOrderQuantitySummary,
  buildOrderWhatsAppUrl,
} from '../services/orderUtils';

const initialOrderFormData = {
  customerEmail: '',
  customerName: '',
  customerPhone: '',
  deliveryAddress: '',
  notes: '',
};

function validateOrderForm(orderFormData) {
  const nextErrors = {};

  if (!orderFormData.customerName.trim()) {
    nextErrors.customerName = 'Please enter your name.';
  }

  if (!orderFormData.customerPhone.trim()) {
    nextErrors.customerPhone = 'Please enter your phone number.';
  } else if (!/^[+0-9\s-]{8,}$/.test(orderFormData.customerPhone.trim())) {
    nextErrors.customerPhone = 'Please use a valid phone number.';
  }

  if (!orderFormData.customerEmail.trim()) {
    nextErrors.customerEmail = 'Please enter your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(orderFormData.customerEmail.trim())) {
    nextErrors.customerEmail = 'Please use a valid email format.';
  }

  if (!orderFormData.deliveryAddress.trim()) {
    nextErrors.deliveryAddress = 'Please enter your delivery address.';
  }

  return nextErrors;
}

function Cart() {
  const { cartItems, cartTotal, closeCart, isCartOpen, removeItem, updateQuantity } = useCart();
  const [orderFormData, setOrderFormData] = useState(initialOrderFormData);
  const [orderErrors, setOrderErrors] = useState({});
  const [orderStatus, setOrderStatus] = useState(null);
  const [isSubmittingOrder, setIsSubmittingOrder] = useState(false);
  const orderProductSummary = buildOrderProductSummary(cartItems);
  const orderQuantitySummary = buildOrderQuantitySummary(cartItems);

  useEffect(() => {
    if (!isCartOpen) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeCart();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleEscape);
    };
  }, [closeCart, isCartOpen]);

  useEffect(() => {
    if (cartItems.length > 0) {
      return;
    }

    setOrderErrors({});
    setOrderStatus(null);
    setIsSubmittingOrder(false);
  }, [cartItems.length]);

  const handleOrderFieldChange = (event) => {
    const { name, value } = event.target;

    setOrderFormData((currentState) => ({
      ...currentState,
      [name]: value,
    }));

    setOrderErrors((currentErrors) => {
      if (!currentErrors[name]) {
        return currentErrors;
      }

      const nextErrors = { ...currentErrors };
      delete nextErrors[name];
      return nextErrors;
    });
  };

  const handleOrderSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = validateOrderForm(orderFormData);
    setOrderErrors(nextErrors);
    setOrderStatus(null);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const templateParams = buildOrderEmailParams(orderFormData, cartItems, cartTotal);
    const whatsappLink = buildOrderWhatsAppUrl(orderFormData, cartItems, cartTotal);

    window.open(whatsappLink, '_blank', 'noopener,noreferrer');

    if (!window.emailjs) {
      setOrderStatus({
        message:
          'WhatsApp opened with your order details, but EmailJS is not available in this browser session yet.',
        tone: 'error',
        title: 'WhatsApp opened, but emails were not sent',
      });
      return;
    }

    setIsSubmittingOrder(true);

    try {
      const [adminEmailResult, customerEmailResult] = await Promise.allSettled([
        window.emailjs.send(
          emailjsOrderConfig.serviceId,
          emailjsOrderConfig.adminTemplateId,
          templateParams,
        ),
        window.emailjs.send(
          emailjsOrderConfig.serviceId,
          emailjsOrderConfig.autoReplyTemplateId,
          templateParams,
        ),
      ]);

      const adminEmailSent = adminEmailResult.status === 'fulfilled';
      const customerEmailSent = customerEmailResult.status === 'fulfilled';

      if (adminEmailSent && customerEmailSent) {
        setOrderFormData(initialOrderFormData);
        setOrderStatus({
          message:
            'Your order was emailed to our farm team, a confirmation email was sent to you, and WhatsApp opened with the same order details.',
          tone: 'success',
          title: 'Order sent successfully',
        });
        return;
      }

      if (!adminEmailSent) {
        console.error('Admin EmailJS send failed', adminEmailResult.reason);
      }

      if (!customerEmailSent) {
        console.error('Customer EmailJS send failed', customerEmailResult.reason);
      }

      if (adminEmailSent) {
        setOrderStatus({
          message:
            'The farm team email was sent and WhatsApp opened, but the customer auto-reply could not be delivered.',
          tone: 'error',
          title: 'Order shared, but auto-reply failed',
        });
        return;
      }

      if (customerEmailSent) {
        setOrderStatus({
          message:
            'The customer auto-reply was sent and WhatsApp opened, but the admin email could not be delivered.',
          tone: 'error',
          title: 'Customer confirmation sent, but farm email failed',
        });
        return;
      }

      setOrderStatus({
        message:
          'WhatsApp opened with your order details, but both EmailJS sends failed. Please send the WhatsApp message and try the form again if needed.',
        tone: 'error',
        title: 'Emails failed to send',
      });
    } catch (error) {
      console.error('Unexpected order submission error', error);
      setOrderStatus({
        message:
          'WhatsApp opened with your order details, but an unexpected error interrupted the email send.',
        tone: 'error',
        title: 'Unexpected sending issue',
      });
    } finally {
      setIsSubmittingOrder(false);
    }
  };

  if (!isCartOpen || typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <div className="drawer-overlay" role="presentation">
      <button className="drawer-backdrop" type="button" aria-label="Close cart" onClick={closeCart} />
      <aside className="cart-drawer" role="dialog" aria-label="Shopping cart" aria-modal="true">
        <div className="cart-header">
          <div>
            <span className="eyebrow">Your basket</span>
            <h2>Fresh picks in cart</h2>
          </div>
          <button className="icon-button" type="button" aria-label="Close cart" onClick={closeCart}>
            <FiX />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-icon">
              <FiShoppingBag />
            </div>
            <h3>Your cart is empty</h3>
            <p>Add fruit from our latest harvest and we will keep the total updated here.</p>
            <Link className="button button-primary" to="/products" onClick={closeCart}>
              Browse Products
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <article key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} loading="lazy" />

                  <div className="cart-item-copy">
                    <div className="cart-item-top">
                      <div>
                        <h3>{item.name}</h3>
                        <p>
                          {formatCurrency(item.price)} / {item.unit}
                        </p>
                      </div>
                      <button
                        className="remove-button"
                        type="button"
                        aria-label={`Remove ${item.name}`}
                        onClick={() => removeItem(item.id)}
                      >
                        <FiTrash2 />
                      </button>
                    </div>

                    <div className="cart-item-bottom">
                      <div className="quantity-control quantity-control-small">
                        <button
                          className="qty-button"
                          type="button"
                          aria-label={`Decrease quantity of ${item.name}`}
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <FiMinus />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          className="qty-button"
                          type="button"
                          aria-label={`Increase quantity of ${item.name}`}
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <FiPlus />
                        </button>
                      </div>

                      <strong>{formatCurrency(item.price * item.quantity)}</strong>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="cart-summary">
              <div className="summary-row">
                <span>Total</span>
                <strong>{formatCurrency(cartTotal)}</strong>
              </div>

              {orderStatus ? (
                <div
                  className={`success-banner order-status-banner${
                    orderStatus.tone === 'error' ? ' is-error' : ''
                  }`}
                >
                  {orderStatus.tone === 'error' ? <FiAlertCircle /> : <FiCheckCircle />}
                  <div>
                    <strong>{orderStatus.title}</strong>
                    <p>{orderStatus.message}</p>
                  </div>
                </div>
              ) : null}

              <form className="order-form" onSubmit={handleOrderSubmit} noValidate>
                <div className="field-grid">
                  <label className="form-field" htmlFor="name">
                    <span>Name</span>
                    <input
                      id="name"
                      type="text"
                      name="customerName"
                      value={orderFormData.customerName}
                      onChange={handleOrderFieldChange}
                      placeholder="Your full name"
                    />
                    {orderErrors.customerName ? (
                      <small className="field-error">{orderErrors.customerName}</small>
                    ) : null}
                  </label>

                  <label className="form-field" htmlFor="phone">
                    <span>Phone Number</span>
                    <input
                      id="phone"
                      type="tel"
                      name="customerPhone"
                      value={orderFormData.customerPhone}
                      onChange={handleOrderFieldChange}
                      placeholder="+91 98765 43210"
                    />
                    {orderErrors.customerPhone ? (
                      <small className="field-error">{orderErrors.customerPhone}</small>
                    ) : null}
                  </label>
                </div>

                <label className="form-field" htmlFor="email">
                  <span>Email</span>
                  <input
                    id="email"
                    type="email"
                    name="customerEmail"
                    value={orderFormData.customerEmail}
                    onChange={handleOrderFieldChange}
                    placeholder="name@example.com"
                  />
                  {orderErrors.customerEmail ? (
                    <small className="field-error">{orderErrors.customerEmail}</small>
                  ) : null}
                </label>

                <label className="form-field" htmlFor="delivery-address">
                  <span>Delivery Address</span>
                  <textarea
                    id="delivery-address"
                    name="deliveryAddress"
                    rows="4"
                    value={orderFormData.deliveryAddress}
                    onChange={handleOrderFieldChange}
                    placeholder="House number, area, city, and any landmark"
                  />
                  {orderErrors.deliveryAddress ? (
                    <small className="field-error">{orderErrors.deliveryAddress}</small>
                  ) : null}
                </label>

                <label className="form-field" htmlFor="message">
                  <span>Message</span>
                  <textarea
                    id="message"
                    name="notes"
                    rows="3"
                    value={orderFormData.notes}
                    onChange={handleOrderFieldChange}
                    placeholder="Preferred delivery time, ripeness preference, or anything else"
                  />
                </label>

                <input id="product" name="product" type="hidden" value={orderProductSummary} readOnly />
                <input id="quantity" name="quantity" type="hidden" value={orderQuantitySummary} readOnly />

                <div className="order-actions">
                  <button className="button button-primary" type="submit" disabled={isSubmittingOrder}>
                    {isSubmittingOrder ? 'Sending Order...' : 'Submit Order'}
                  </button>
                  <button
                    className="button button-secondary"
                    type="button"
                    onClick={() => window.open(orderContact.whatsappHref, '_blank', 'noopener,noreferrer')}
                  >
                    Open WhatsApp
                  </button>
                  <Link className="button button-secondary" to="/contact" onClick={closeCart}>
                    Need Help?
                  </Link>
                </div>
              </form>
            </div>
          </>
        )}
      </aside>
    </div>,
    document.body,
  );
}

export default Cart;
