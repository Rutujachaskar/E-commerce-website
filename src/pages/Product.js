import React, { useState } from 'react';
import './Product.css';
import { useCart } from '../context/CartContext'; // Import useCart hook

function Product() {
  const { addToCart } = useCart(); // Destructure addToCart function from context
  const [products] = useState([
    {
      id: 1,
      name: 'iPhone 13',
      price: '₹70,000',
      description: 'Latest Apple iPhone',
      image: '/iphone13.jpg', // Corrected path
    },
    {
      id: 2,
      name: 'Samsung Galaxy S21',
      price: '₹65,000',
      description: 'Flagship Samsung phone',
      image: '/samsung.jpg', // Corrected path
    },
    {
      id: 3,
      name: 'OnePlus 9 Pro',
      price: '₹55,000',
      description: 'High-end OnePlus phone',
      image: '/oneplus.jpg', // Corrected path
    },
  ]);

  return (
    <div>
      <br></br>
      <h1>Products</h1>
      
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
