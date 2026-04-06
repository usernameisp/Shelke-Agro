import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiMinus,
  FiPlus,
  FiShoppingBag,
  FiTrash2,
} from 'react-icons/fi';
import PageHero from './PageHero';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../services/formatters';
import { emailjsOrderConfig, orderContact } from '../services/orderConfig';
import { pageImages } from '../services/farmData';
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

const initialCartStep = 'review';

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
  const { cartItems, cartTotal, removeItem, updateQuantity } = useCart();
  const [orderFormData, setOrderFormData] = useState(initialOrderFormData);
  const [orderErrors, setOrderErrors] = useState({});
  const [orderStatus, setOrderStatus] = useState(null);
  const [isSubmittingOrder, setIsSubmittingOrder] = useState(false);
  const [activeStep, setActiveStep] = useState(initialCartStep);
  const orderProductSummary = buildOrderProductSummary(cartItems);
  const orderQuantitySummary = buildOrderQuantitySummary(cartItems);

  useEffect(() => {
    if (cartItems.length > 0) {
      return;
    }

    setActiveStep(initialCartStep);
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

  return (
    <>
      <PageHero
        eyebrow="Your Basket"
        title="Review your selected products and continue to checkout"
        description="Use this page to verify the products you added, update quantities, remove anything you no longer want, and then continue with order details."
        image={pageImages.cartHero}
      />

      <section className="section section-top-tight">
        <div className="container">
          {cartItems.length === 0 ? (
            <div className="cart-page-shell empty-cart-page">
              <div className="empty-cart">
                <div className="empty-cart-icon">
                  <FiShoppingBag />
                </div>
                <h3>Your cart is empty</h3>
                <p>Add fruit from our latest harvest and then return here to review your basket.</p>
                <Link className="button button-primary" to="/products">
                  Browse Products
                </Link>
              </div>
            </div>
          ) : (
            <div className="cart-page-shell">
              <div className="cart-header">
                <div>
                  <span className="eyebrow">Your basket</span>
                  <h2>{activeStep === 'checkout' ? 'Fill your order details' : 'Review selected products'}</h2>
                </div>
                <Link className="button button-secondary cart-page-link" to="/products">
                  Continue Shopping
                </Link>
              </div>

              {activeStep === 'review' ? (
                <>
                  <div className="cart-selected-header">
                    <div>
                      <span className="eyebrow">Selected Products</span>
                      <h3>{cartItems.length} product{cartItems.length === 1 ? '' : 's'} in your basket</h3>
                      <p>Review your selected items, update quantities, or remove products before continuing.</p>
                    </div>
                  </div>

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
                            <span className="cart-item-quantity">Qty {item.quantity}</span>
                          </div>

                          <div className="cart-item-bottom">
                            <strong>{formatCurrency(item.price * item.quantity)}</strong>

                            <div className="cart-item-actions">
                              <button
                                className="remove-button"
                                type="button"
                                aria-label={`Remove ${item.name}`}
                                onClick={() => removeItem(item.id)}
                              >
                                <FiTrash2 />
                                <span>Remove</span>
                              </button>
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
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>

                  <div className="cart-review-panel">
                    <div className="summary-row">
                      <span>Total</span>
                      <strong>{formatCurrency(cartTotal)}</strong>
                    </div>

                    <div className="cart-review-actions">
                      <button
                        className="button button-primary"
                        type="button"
                        onClick={() => setActiveStep('checkout')}
                      >
                        Continue with Details
                      </button>
                      <Link className="button button-secondary" to="/products">
                        Keep Browsing
                      </Link>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="cart-step-header">
                    <div>
                      <span className="eyebrow">Checkout Details</span>
                      <h3>Continue with form filling</h3>
                      <p>We have saved your selected products below. Complete the form to place the order.</p>
                    </div>
                    <button className="button button-secondary" type="button" onClick={() => setActiveStep('review')}>
                      Back to Basket
                    </button>
                  </div>

                  <div className="cart-checkout-summary">
                    <div className="checkout-summary-card">
                      <span>Products</span>
                      <strong>{orderProductSummary}</strong>
                    </div>
                    <div className="checkout-summary-card">
                      <span>Total quantity</span>
                      <strong>{orderQuantitySummary}</strong>
                    </div>
                    <div className="checkout-summary-card">
                      <span>Estimated total</span>
                      <strong>{formatCurrency(cartTotal)}</strong>
                    </div>
                  </div>

                  <div className="cart-summary">
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
                        <Link className="button button-secondary" to="/contact">
                          Need Help?
                        </Link>
                      </div>
                    </form>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Cart;
