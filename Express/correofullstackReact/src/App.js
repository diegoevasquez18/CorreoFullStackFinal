import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import './App.css';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import Index from './pages/Index';
import Servicios from './pages/Servicios';
import Contactanos from './pages/Contactanos';
import Ecofriendly from './pages/Ecofriendly';
import Nosotros from './pages/Nosotros';

function App() {
  return (
      <div className='app'>
        <Header />
        <BrowserRouter>
          <Nav />
            <Routes>
              <Route path="/" element={<Index />}/>
              <Route path="/servicios" element={<Servicios />}/>
              <Route path="/contactanos" element={<Contactanos />}/>
              <Route path="/ecofriendly" element={<Ecofriendly />}/>
              <Route path="/nosotros" element={<Nosotros />}/>
            </Routes>
        </BrowserRouter>
        <Footer />
      </div>
  )
}

export default App;
