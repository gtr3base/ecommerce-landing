import React, { useEffect, useState } from 'react';
import '../App.css';

const Navbar = ({ cartCount }) => {
    const [isBouncing, setIsBouncing] = useState(false);

    useEffect(() => {
        if(cartCount > 0){
            setIsBouncing(true);
            const timer = setTimeout(() => setIsBouncing(false), 500);
            return () => clearTimeout(timer);
        }
    }, [cartCount])


  return (
    <nav>
      <h1>E-Shop</h1>
      <div className={`cart-icon ${isBouncing ? 'bounce' : ''}`}>🛒 
        <span className='cart-count'>{cartCount}</span></div>
    </nav>
  );
};

export default Navbar;