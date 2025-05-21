import React, { useEffect, useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom'

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
      <Link to={"/basket"} className={`cart-icon ${isBouncing ? 'bounce' : ''}`}>🛒 
        <span className='cart-count'>{cartCount}</span></Link>
    </nav>
  );
};

export default Navbar;