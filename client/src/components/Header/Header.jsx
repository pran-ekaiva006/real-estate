import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "./Header.css";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  // Check login state
  useEffect(() => {
    const token = localStorage.getItem('token');
    const userStr = localStorage.getItem('user');
    if (token && userStr) {
      setIsLoggedIn(true);
      try {
        setUser(JSON.parse(userStr));
      } catch {
        setUser(null);
      }
    } else {
      setIsLoggedIn(false);
      setUser(null);
    }
  }, [location.pathname]);

  // Sync login across tabs
  useEffect(() => {
    const handler = () => {
      const token = localStorage.getItem('token');
      const userStr = localStorage.getItem('user');
      setIsLoggedIn(!!(token && userStr));
      setUser(userStr ? JSON.parse(userStr) : null);
    };
    window.addEventListener('storage', handler);
    return () => window.removeEventListener('storage', handler);
  }, []);

  // Scroll shadow effect
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) {
      const headerHeight = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleAnchorClick = (e, href, item) => {
    e.preventDefault();

    if (item === 'View Listings') {
      navigate('/listings');
      setIsMobileMenuOpen(false);
      return;
    }

    // Special handling for "Our Value"
    if (item === 'Our Value') {
      if (location.pathname === '/') {
        scrollToSection(href);
      } else {
        navigate('/');
        setTimeout(() => scrollToSection(href), 100);
      }
      setIsMobileMenuOpen(false);
      return;
    }

    const el = document.querySelector(href);
    if (el) {
      scrollToSection(href);
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen((v) => !v);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUser(null);
    setIsMobileMenuOpen(false);
    navigate('/login');
  };

  const addListingClick = (e) => {
    if (!isLoggedIn) {
      e.preventDefault();
      navigate('/login');
    }
  };

  const firstLetter =
    (user?.username?.[0] ||
      user?.name?.[0] ||
      user?.email?.[0] ||
      'U').toUpperCase();

  const sections = ['Residencies', 'Our Value', 'Contact Us', 'View Listings'];

  return (
    <>
      <header className={`h-wrapper ${isScrolled ? 'scrolled' : ''}`}>
        <div className="h-container">
          {/* Logo */}
          <a href="/" className="logo-container" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
            <div className="logo-icon">H</div>
            <span className="logo-text">Homyz</span>
          </a>

          {/* Desktop Navigation */}
          <div className="h-menu">
            <ul className="nav-links">
              {sections.map((item) => {
                const id = `#${item.toLowerCase().replace(/\s+/g, '-')}`;
                return (
                  <li key={item}>
                    <a href={id} className="nav-link" onClick={(e) => handleAnchorClick(e, id, item)}>
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Actions */}
            <div className="nav-actions">
              <a href="/add-listing" onClick={addListingClick} className="btn btn-secondary">
                <span>+</span> Add Listing
              </a>

              {!isLoggedIn ? (
                <div className="auth-buttons">
                  <a href="/login" onClick={(e) => { e.preventDefault(); navigate('/login'); }} className="btn btn-ghost">
                    Login
                  </a>
                  <a href="/register" onClick={(e) => { e.preventDefault(); navigate('/register'); }} className="btn btn-primary">
                    Register
                  </a>
                </div>
              ) : (
                <div className="auth-buttons">
                  <div className="avatar" title={user?.email || user?.username || 'Account'}>
                    {firstLetter}
                  </div>
                  <button onClick={handleLogout} className="btn btn-ghost">Logout</button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
            aria-label="Toggle mobile menu"
          >
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul className="mobile-nav-links">
          {sections.map((item) => {
            const id = `#${item.toLowerCase().replace(/\s+/g, '-')}`;
            return (
              <li key={item}>
                <a href={id} className="mobile-nav-link" onClick={(e) => handleAnchorClick(e, id, item)}>
                  {item}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="mobile-actions">
          <a href="/add-listing" onClick={addListingClick} className="btn btn-secondary mobile-btn-full">
            Add New Listing
          </a>

          {!isLoggedIn ? (
            <div className="mobile-auth-grid">
              <a href="/login" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); navigate('/login'); }} className="btn btn-ghost">
                Login
              </a>
              <a href="/register" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); navigate('/register'); }} className="btn btn-primary">
                Get Started
              </a>
            </div>
          ) : (
            <div className="mobile-user-section">
              <div className="mobile-user-info">
                <div className="avatar">{firstLetter}</div>
                <span className="user-email">{user?.email}</span>
              </div>
              <button onClick={handleLogout} className="btn btn-secondary mobile-btn-full">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && <div className="mobile-overlay" onClick={() => setIsMobileMenuOpen(false)} />}
    </>
  );
}

export default Header;
