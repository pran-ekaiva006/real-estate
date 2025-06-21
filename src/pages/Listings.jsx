import React, { useEffect, useState } from 'react';
import API from '../api';
import './Listings.css';

const Listings = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await API.get('/listings');
        setListings(res.data);
      } catch (err) {
        console.error('Error fetching listings:', err);
      }
    };

    fetchListings();
  }, []);

  return (
    <div className="listings-wrapper">
      <h2 className="listings-title">🏘 Available Properties</h2>
      {listings.length === 0 ? (
        <p className="no-listings">No listings available at the moment.</p>
      ) : (
        <div className="listings-grid">
          {listings.map((listing) => (
            <div className="listing-card" key={listing._id}>
              <h3>{listing.title}</h3>
              <p><strong>📍 Location:</strong> {listing.location}</p>
              <p><strong>💰 Price:</strong> ₹{listing.price?.toLocaleString() || 'N/A'}</p>
              <p><strong>🧑 Posted By:</strong> {listing.postedBy?.username || 'Anonymous'}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Listings;