import React, { useState, useEffect } from 'react';
import "./Header.css";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // You can get this from your auth context/state
  const [user, setUser] = useState({ name: 'John Doe', email: 'john@example.com', avatar: null }); // User data

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scroll for anchor links
  const handleAnchorClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Demo function to toggle login state (replace with your actual auth logic)
  const handleLoginToggle = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Add your logout logic here
  };

  return (
    <>
      {/* Header */}
      <header className={`h-wrapper ${isScrolled ? 'scrolled' : ''}`}>
        <div className="h-container">
          
          {/* Logo */}
          <a href="/" className="logo-container" onClick={(e) => { e.preventDefault(); setIsLoggedIn(!isLoggedIn); }}>
            <div className="logo-icon">H</div>
            <span className="logo-text">Homyz</span>
          </a>

          {/* Desktop Navigation */}
          <div className="h-menu">
            <ul className="nav-links">
              {['Residencies', 'Our Value', 'Contact Us', 'View Listings'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="nav-link"
                    onClick={(e) => handleAnchorClick(e, `#${item.toLowerCase().replace(' ', '-')}`)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Action Buttons */}
            <div className="nav-actions">
              <a href="/add-listing" className="btn btn-secondary">
                <span>+</span>
                Add Listing
              </a>
              
              {/* Conditional rendering based on login status */}
              {isLoggedIn ? (
                <div className="auth-buttons">
                  <div className="user-info">
                    <div className="email-icon">
                      ✉️
                    </div>
                    <span className="user-email">{user.email}</span>
                  </div>
                  <button onClick={handleLogout} className="btn btn-ghost">Logout</button>
                </div>
              ) : (
                <div className="auth-buttons">
                  <a href="/login" className="btn btn-ghost">Login</a>
                  <a href="/register" className="btn btn-primary">Register</a>
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
          {['🏠 Residencies', '⭐ Our Value', '📞 Contact Us', '📋 View Listings'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.split(' ')[1].toLowerCase().replace(' ', '-')}`}
                className="mobile-nav-link"
                onClick={(e) => handleAnchorClick(e, `#${item.split(' ')[1].toLowerCase().replace(' ', '-')}`)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        
        <div className="mobile-actions">
          <a href="/add-listing" className="btn btn-secondary mobile-btn-full">
            Add New Listing
          </a>
          
          {/* Mobile auth buttons - conditional */}
          {isLoggedIn ? (
            <div className="mobile-user-section">
              <div className="mobile-user-info">
                <div className="email-icon">✉️</div>
                <span className="user-email">{user.email}</span>
              </div>
              <button onClick={handleLogout} className="btn btn-secondary mobile-btn-full">Logout</button>
            </div>
          ) : (
            <div className="mobile-auth-grid">
              <a href="/login" className="btn btn-ghost">Login</a>
              <a href="/register" className="btn btn-primary">Get Started</a>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-overlay" 
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Header;