import React, { useState } from 'react';
import '../App.css';

const Product = ({ product, addToCart }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <div className="product-card"   >
      <img src={product.image} alt={product.name} className='product-image'/>
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button 
        onClick={handleAddToCart}
        className={isAnimating ? 'animate' : ''}
      >
        {isAnimating ? 'Added!' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default Product;