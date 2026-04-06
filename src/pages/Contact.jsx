import { useState } from 'react';
import { FiCheckCircle, FiClock, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import PageHero from '../components/PageHero';
import SectionIntro from '../components/SectionIntro';
import {
  companyInfo,
  contactHighlights,
  contactSupport,
  pageImages,
} from '../services/farmData';

const iconMap = {
  clock: FiClock,
  mail: FiMail,
  map: FiMapPin,
  phone: FiPhone,
};

const initialFormData = {
  email: '',
  message: '',
  name: '',
  phone: '',
  subject: '',
};

function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const getSafeValue = (value, fallback = 'Not provided') => {
    const trimmedValue = value.trim();
    return trimmedValue || fallback;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentState) => ({
      ...currentState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Please use a valid email format.';
    }

    if (formData.phone.trim() && !/^[+0-9\s-]{8,}$/.test(formData.phone.trim())) {
      nextErrors.phone = 'Please use a valid phone number.';
    }

    if (!formData.subject.trim()) {
      nextErrors.subject = 'Please enter a subject.';
    }

    if (!formData.message.trim()) {
      nextErrors.message = 'Please add a short message.';
    } else if (formData.message.trim().length < 12) {
      nextErrors.message = 'Please share a bit more detail so we can help properly.';
    }

    setErrors(nextErrors);
    setIsSubmitted(false);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const whatsappMessage = [
      'New enquiry from Shelke Organic Farm website',
      '',
      `Name: ${getSafeValue(formData.name)}`,
      `Email: ${getSafeValue(formData.email)}`,
      `Phone: ${getSafeValue(formData.phone)}`,
      `Subject: ${getSafeValue(formData.subject)}`,
      '',
      'Message:',
      getSafeValue(formData.message),
    ].join('\n');

    window.open(
      `${companyInfo.whatsAppHref}?text=${encodeURIComponent(whatsappMessage)}`,
      '_blank',
      'noopener,noreferrer',
    );

    setFormData(initialFormData);
    setIsSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Have questions about our products or services?"
        description={contactSupport.formIntro}
        image={pageImages.contactHero}
      />

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-panel">
            <SectionIntro
              eyebrow="Contact details"
              title="Reach the farm desk directly"
              description="Use the contact form for a message, or connect with us using the details below."
            />

            <div className="contact-card-grid">
              {contactHighlights.map((item) => {
                const Icon = iconMap[item.icon];

                return (
                  <article key={item.title} className="contact-card">
                    <div className="icon-badge">
                      <Icon />
                    </div>
                    <h3>{item.title}</h3>
                    <strong>{item.value}</strong>
                    <p>{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="contact-form-card">
            <SectionIntro
              eyebrow="Send a message"
              title="Send Us a Message"
              description="Share your enquiry and our team will get back to you as quickly as possible."
            />

            {isSubmitted ? (
              <div className="success-banner">
                <FiCheckCircle />
                <div>
                  <strong>WhatsApp opened successfully</strong>
                  <p>Your message is ready in WhatsApp. Review it there and tap send to contact the farm team.</p>
                </div>
              </div>
            ) : null}

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="field-grid">
                <label className="form-field">
                  <span>Name</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                  />
                  {errors.name ? <small className="field-error">{errors.name}</small> : null}
                </label>

                <label className="form-field">
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                  />
                  {errors.email ? <small className="field-error">{errors.email}</small> : null}
                </label>
              </div>

              <div className="field-grid">
                <label className="form-field">
                  <span>Phone Number</span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 89563 08972"
                  />
                  {errors.phone ? <small className="field-error">{errors.phone}</small> : null}
                </label>

                <label className="form-field">
                  <span>Subject</span>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                  />
                  {errors.subject ? <small className="field-error">{errors.subject}</small> : null}
                </label>
              </div>

              <label className="form-field">
                <span>Message</span>
                <textarea
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                />
                {errors.message ? <small className="field-error">{errors.message}</small> : null}
              </label>

              <div className="contact-form-actions">
                <button className="button button-primary" type="submit">
                  Send on WhatsApp
                </button>
                <a
                  className="button button-secondary"
                  href={companyInfo.whatsAppHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open WhatsApp
                </a>
              </div>
            </form>

            <div className="contact-support-panels">
              <article className="contact-support-card">
                <span className="eyebrow">Chat on WhatsApp</span>
                <h3>{contactSupport.whatsappTitle}</h3>
                <p>{contactSupport.whatsappDescription}</p>
              </article>
              <article className="contact-support-card">
                <span className="eyebrow">Visit Our Farm</span>
                <h3>{contactSupport.visitTitle}</h3>
                <p>{contactSupport.visitDescription}</p>
                <p className="visit-note">{contactSupport.visitNote}</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-top-tight">
        <div className="container">
          <div className="map-card">
            <div className="map-copy">
              <span className="eyebrow">Find us</span>
              <h2>Shelke Organic Farm Desk</h2>
              <p>{companyInfo.address}</p>
            </div>

            <iframe
              src={companyInfo.mapEmbedUrl}
              title="Shelke Organic Farm location map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
