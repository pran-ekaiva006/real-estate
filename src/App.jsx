import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

import './App.css';
import Residencies from './components/Residencies/Residencies';
import Value from './components/Value/Value';
import Companies from './components/companies/companies';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
     <Companies/>
     <Residencies/>
     <Value/>
     <Contact/>
     <footer>
    <p className='flexCenter'> copyright&copy; 2024 shockfurny. All rights reserved.</p>
</footer>
    </div>
   
  );
}

export default App;
