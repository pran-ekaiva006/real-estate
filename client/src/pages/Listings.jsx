// src/pages/Listings.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';
import './Listings.css';

const Listings = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('user');
    return stored ? JSON.parse(stored) : null;
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchListings = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await API.get('/api/listings');
        setListings(res.data);
      } catch (err) {
        console.error('Error fetching listings:', err);
        setError('Failed to load listings. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchListings();

    // Listen for login/register changes from other components
    const handleStorageChange = () => {
      const stored = localStorage.getItem('user');
      setUser(stored ? JSON.parse(stored) : null);
    };
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleContactSeller = (listing) => {
    if (!user) {
      // Redirect to login with return URL
      navigate('/login', { state: { returnTo: '/listings' } });
      return;
    }
    // Handle contact logic here (e.g., open modal, send message, etc.)
    alert(`Contact ${listing.postedBy?.username || 'seller'} about "${listing.title}"`);
  };

  if (loading) {
    return (
      <div className="listings-container">
        <div className="loading-state">
          <div className="loading-spinner"></div>
          <p>Loading properties...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="listings-container">
        <div className="error-state">
          <h2>🏘 Available Properties</h2>
          <div className="error-message">
            <p>{error}</p>
            <button 
              className="btn btn-primary"
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="listings-container">
      <div className="listings-header">
        <h1>🏘 Available Properties</h1>
        <p className="listings-subtitle">
          Discover your perfect home from our curated selection
        </p>
        {!user && (
          <div className="guest-notice">
            <p>
              👋 <strong>New here?</strong> 
              <button 
                onClick={() => navigate('/login')}
                className="link-button"
              >
                Sign in
              </button>
              to contact sellers and save favorites
            </p>
          </div>
        )}
      </div>

      {listings.length === 0 ? (
        <div className="no-listings">
          <div className="empty-state">
            <h3>No properties available</h3>
            <p>Be the first to add a listing!</p>
            {user && (
              <button 
                onClick={() => navigate('/add-listing')}
                className="btn btn-primary"
              >
                Add Your Property
              </button>
            )}
          </div>
        </div>
      ) : (
        <>
          <div className="listings-stats">
            <p>{listings.length} {listings.length === 1 ? 'property' : 'properties'} available</p>
          </div>
          
          <div className="listings-grid">
            {listings.map((listing) => (
              <div className="listing-card" key={listing._id}>
                {/* Placeholder for image */}
                <div className="listing-image-placeholder">
                  🏠
                </div>
                
                <div className="listing-content">
                  <h3 className="listing-title">{listing.title}</h3>
                  
                  <div className="listing-details">
                    <div className="detail-item">
                      <span className="detail-icon">📍</span>
                      <span className="detail-label">Location:</span>
                      <span className="detail-value">{listing.location}</span>
                    </div>
                    
                    <div className="detail-item price-item">
                      <span className="detail-icon">💰</span>
                      <span className="detail-label">Price:</span>
                      <span className="detail-value price">
                        ₹{listing.price?.toLocaleString() || 'Contact for price'}
                      </span>
                    </div>
                    
                    <div className="detail-item">
                      <span className="detail-icon">👤</span>
                      <span className="detail-label">Listed by:</span>
                      <span className="detail-value">
                        {listing.postedBy?.username || 'Private Seller'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="listing-actions">
                    <button 
                      className="btn btn-primary btn-contact"
                      onClick={() => handleContactSeller(listing)}
                    >
                      {user ? 'Contact Seller' : 'Login to Contact'}
                    </button>
                    <button className="btn btn-ghost btn-details">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Listings;