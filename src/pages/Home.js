import React from 'react';
import './Home.css';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Welcome to Shivshambhu Mobile Shopee</h1>
        <p>Find the best deals on new and second-hand mobiles!</p>
        <button className="hero-button">Shop Now</button>
      </div>

      {/* Additional Content */}
      <div className="additional-content">
        <h2>Why Choose Us?</h2>
        <p>We offer the best prices, quality products, and exceptional customer service.</p>
      </div>
    </div>
  );
}

export default Home;
