import { Link } from 'react-router-dom';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import logo from '../../logo2-transparent.png';
import { companyInfo, navLinks } from '../services/farmData';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-shell">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="brand-mark brand-mark-footer">
                <img className="brand-logo brand-logo-footer" src={logo} alt={`${companyInfo.brand} logo`} />
              </div>

              <p>{companyInfo.shortTagline}</p>
            </div>

            <div className="footer-links">
              <h3>Quick Links</h3>
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path}>
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="footer-contact">
              <h3>Contact</h3>
              <a href={companyInfo.phoneHref}>
                <FiPhone />
                <span>{companyInfo.phone}</span>
              </a>
              <a href={companyInfo.emailHref}>
                <FiMail />
                <span>{companyInfo.email}</span>
              </a>
              <a href={companyInfo.mapUrl} target="_blank" rel="noreferrer">
                <FiMapPin />
                <span>{companyInfo.address}</span>
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <span>Copyright 2026 {companyInfo.brand}. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
