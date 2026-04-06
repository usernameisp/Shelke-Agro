import { formatCurrency } from './formatters';
import { orderContact } from './orderConfig';

function getSafeValue(value, fallback = 'Not provided') {
  const trimmedValue = value.trim();
  return trimmedValue || fallback;
}

function getOrderLines(cartItems) {
  return cartItems.map(
    (item, index) =>
      `${index + 1}. ${item.name} - ${item.quantity} ${item.unit} x ${formatCurrency(item.price)} = ${formatCurrency(item.price * item.quantity)}`,
  );
}

export function buildOrderProductSummary(cartItems) {
  return cartItems
    .map((item) => `${item.name} (${item.quantity} ${item.unit})`)
    .join(', ');
}

export function buildOrderQuantitySummary(cartItems) {
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  return `${totalQuantity} item${totalQuantity === 1 ? '' : 's'}`;
}

export function buildOrderEmailParams(orderDetails, cartItems, cartTotal) {
  return {
    email: getSafeValue(orderDetails.customerEmail),
    message: [
      `Delivery address: ${getSafeValue(orderDetails.deliveryAddress)}`,
      `Notes: ${getSafeValue(orderDetails.notes, 'None')}`,
      '',
      'Order items:',
      ...getOrderLines(cartItems),
      '',
      `Estimated total: ${formatCurrency(cartTotal)}`,
    ].join('\n'),
    name: getSafeValue(orderDetails.customerName),
    phone: getSafeValue(orderDetails.customerPhone),
    product: buildOrderProductSummary(cartItems),
    quantity: buildOrderQuantitySummary(cartItems),
    time: new Intl.DateTimeFormat('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short',
    }).format(new Date()),
  };
}

export function buildOrderMessage(orderDetails, cartItems, cartTotal) {
  const emailParams = buildOrderEmailParams(orderDetails, cartItems, cartTotal);

  const lines = [
    'New order from Shelke Organic Farm website',
    '',
    `Name: ${emailParams.name}`,
    `Phone: ${emailParams.phone}`,
    `Email: ${emailParams.email}`,
    `Products: ${emailParams.product}`,
    `Total quantity: ${emailParams.quantity}`,
    `Time: ${emailParams.time}`,
    '',
    emailParams.message,
  ];

  return lines.join('\n');
}

export function buildOrderWhatsAppUrl(orderDetails, cartItems, cartTotal) {
  const message = encodeURIComponent(buildOrderMessage(orderDetails, cartItems, cartTotal));
  return `${orderContact.whatsappHref}?text=${message}`;
}
