import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <section className="h-wrapper">
      <div className="flexCenter innerWidth paddings h-container">
        {/* Logo */}
        <Link to="/">
          <img src="./logo.png" alt="logo" width={100} />
        </Link>

        {/* Navigation Menu */}
        <div className="flexCenter h-menu">
          <a href="#residencies">Residencies</a>
          <a href="#value">Our Value</a>
          <a href="#contact">Contact Us</a>

          {/* Routing buttons */}
          <Link to="/listings">
            <button className="button">View Listings</button>
          </Link>

          <Link to="/add-listing">
            <button className="button">Add Listing</button>
          </Link>

          <Link to="/register">
            <button className="button">Register</button>
          </Link>

          <Link to="/login">
            <button className="button">Login</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Header;