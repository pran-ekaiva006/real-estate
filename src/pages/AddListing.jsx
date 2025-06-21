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
    try {
      const token = localStorage.getItem('token');
      await API.post('/listings', form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert('Listing added successfully');
      navigate('/listings');
    } catch (err) {
      alert('Failed to add listing');
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