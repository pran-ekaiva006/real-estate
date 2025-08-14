// src/pages/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api'; // axios instance
import './Auth.css';

const Register = ({ onLogin }) => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await API.post('/api/auth/register', form);

      // Auto-login after successful registration
      if (res.data.token && res.data.user) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));

        // Trigger header update for other components/tabs
        window.dispatchEvent(new Event('storage'));

        if (onLogin) onLogin(res.data.user);

        navigate('/listings');
      } else {
        // If API doesn't return token, go to login
        navigate('/login');
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
        err.response?.data ||
        'Registration failed'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Register</h2>

        {error && <div className="auth-error">{error}</div>}

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
          disabled={loading}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          disabled={loading}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          disabled={loading}
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>

        <div className="auth-switch" onClick={() => navigate('/login')}>
          Already have an account? <span className="link">Login</span>
        </div>
      </form>
    </div>
  );
};

export default Register;
