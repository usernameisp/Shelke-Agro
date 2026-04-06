const defaultCountryCode = '91';

// Update these two values when you want orders to go to a new destination.
// Use a full email address here before going live.
const orderDestination = {
  email: 'prajwalthorat798',
  phone: '9322169282',
};

function getPhoneDigits(value) {
  return value.replace(/\D/g, '');
}

function getPhoneWithCountryCode(phone) {
  const digits = getPhoneDigits(phone);

  if (!digits) {
    return '';
  }

  return digits.length === 10 ? `${defaultCountryCode}${digits}` : digits;
}

function getPhoneDisplay(phone) {
  const digits = getPhoneDigits(phone);

  if (digits.length === 10) {
    return `+${defaultCountryCode} ${digits.slice(0, 5)} ${digits.slice(5)}`;
  }

  return phone;
}

const whatsappNumber = getPhoneWithCountryCode(orderDestination.phone);

export const emailjsOrderConfig = {
  adminTemplateId: 'template_9qa6ksm',
  autoReplyTemplateId: 'template_204rhkf',
  serviceId: 'service_l689yur',
};

export const orderContact = {
  email: orderDestination.email,
  phoneDisplay: getPhoneDisplay(orderDestination.phone),
  phoneHref: whatsappNumber ? `tel:+${whatsappNumber}` : 'tel:',
  rawPhone: orderDestination.phone,
  whatsappHref: whatsappNumber ? `https://wa.me/${whatsappNumber}` : '#',
  whatsappNumber,
};
