import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Product from './pages/Product';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Payment from './pages/Payment';
import Cart from './pages/Cart';
import Footer from './components/Footer'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} /> {/* Add route for cart */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
