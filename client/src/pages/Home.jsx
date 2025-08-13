import { useEffect, useState } from 'react';
import API from '../api';

const Home = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    API.get('/listings')
      .then(res => setListings(res.data))
      .catch(() => alert('Failed to load listings'));
  }, []);

  return (
    <div>
      <h2>All Listings</h2>
      {listings.map(listing => (
        <div key={listing._id}>
          <h3>{listing.title}</h3>
          <p>{listing.description}</p>
          <small>Price: ₹{listing.price}</small>
        </div>
      ))}
    </div>
  );
};

export default Home;