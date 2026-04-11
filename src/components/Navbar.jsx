import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FiArrowRight, FiShoppingBag } from 'react-icons/fi';
import { HiBars3, HiXMark } from 'react-icons/hi2';
import logo from '../../logo2-transparent.png';
import { useCart } from '../context/CartContext';
import { companyInfo, navLinks } from '../services/farmData';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const { cartCount } = useCart();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const getNavLinkClass = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link');

  return (
    <header className="site-nav">
      <div className="container">
        <div className="navbar-shell">
          <Link className="brand-mark" to="/" aria-label={`${companyInfo.brand} home`}>
            <img className="brand-logo" src={logo} alt={`${companyInfo.brand} logo`} />
          </Link>

          <nav className="nav-links" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <NavLink key={link.path} className={getNavLinkClass} to={link.path} end={link.path === '/'}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-actions">
            <Link className="cart-button" to="/cart" aria-label="Open cart page">
              <FiShoppingBag />
              <span>Cart</span>
              <span className="cart-count">{cartCount}</span>
            </Link>

            <Link className="button button-primary nav-cta" to="/products">
              Explore Harvest
              <FiArrowRight />
            </Link>

            <button
              className="mobile-menu-toggle"
              type="button"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsMenuOpen((currentState) => !currentState)}
            >
              {isMenuOpen ? <HiXMark /> : <HiBars3 />}
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <div className="mobile-panel">
            <nav className="mobile-links" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <NavLink key={link.path} className={getNavLinkClass} to={link.path} end={link.path === '/'}>
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}

export default Navbar;
