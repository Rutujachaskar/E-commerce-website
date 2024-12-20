import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">Shivshambhu Mobile Shopee</div>
      <div className="nav-links">
        <Link to="/"><i className="fas fa-home"></i> Home</Link>
        <Link to="/products"><i className="fas fa-mobile-alt"></i> Products</Link>
        <Link to="/contact"><i className="fas fa-envelope"></i> Contact</Link>
        <Link to="/payment"><i className="fas fa-credit-card"></i> Payment</Link>
        <Link to="/cart"><i className="fas fa-shopping-cart"></i> Cart</Link>
      </div>
    </div>
  );
}

export default Navbar;
