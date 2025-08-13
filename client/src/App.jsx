import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Residencies from './components/Residencies/Residencies';
import Value from './components/Value/Value';
import Companies from './components/Companies/Companies';
import Contact from './components/Contact/Contact';
import ChatBot from './components/ChatBot/ChatBot';

import Register from './pages/Register';
import Login from './pages/Login';
import AddListing from './pages/AddListing';
import Listings from './pages/Listings';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Companies />
              <Residencies />
              <Value />
              <Contact />
              <footer>
                <p className="flexCenter">copyright © 2024 shockfurny. All rights reserved.</p>
              </footer>
            </>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-listing" element={<AddListing />} />
        <Route path="/listings" element={<Listings />} />
      </Routes>
      <ChatBot />
    </BrowserRouter>
  );
}

export default App;