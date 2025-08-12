// src/pages/AddListing.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';
import './AddListing.css';

const AddListing = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    price: '',
    location: '',
    image: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');

    // 1. Check if the user is authenticated before making the request
    if (!token) {
      alert('Please log in to add a listing.');
      navigate('/login'); // Redirect to login page
      return;
    }

    try {
      // The API call is now correctly prefixed with '/api' to match the backend route
      await API.post('/api/listings', form, {
        headers: {
          // 2. Attach the token to the Authorization header
          Authorization: `Bearer ${token}`,
        },
      });
      alert('Listing added successfully');
      navigate('/listings'); // Redirect to the listings page on success
    } catch (err) {
      // 3. Handle specific errors, including an expired or invalid token
      if (err.response && err.response.status === 401) {
        alert('Your session has expired. Please log in again.');
        navigate('/login'); // Redirect to login page if token is invalid
      } else {
        console.error(err);
        alert('Failed to add listing. Please try again.');
      }
    }
  };

  return (
    <div className="add-listing-container">
      <h2>Add New Listing</h2>
      <form className="add-listing-form" onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          rows={4}
          required
        />
        <input
          name="price"
          type="number"
          placeholder="Price in ₹"
          value={form.price}
          onChange={handleChange}
          required
        />
        <input
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          required
        />
        <input
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
        />
        <button type="submit">Add Listing</button>
      </form>
    </div>
  );
};

export default AddListing;