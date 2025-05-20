import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Product from './components/Product';

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const products = [
    { id: 1, name: 'Wireless Headphones', price: 99.99, image: 'https://jblstore.com.ph/cdn/shop/files/Tune720BT_Blue_1.png?v=1747046882' },
    { id: 2, name: 'Smart Watch', price: 199.99, image: 'https://www.istudiosg.com/cdn/shop/files/Apple_Watch_Series_10_42mm_GPS_Silver_Aluminum_Sport_Band_Denim_PDP_Image_Position_1__GBEN.jpg?v=1727185024' },
    { id: 3, name: 'Bluetooth Speaker', price: 59.99, image: 'https://www.jbhifi.com.au/cdn/shop/products/597794-Product-0-I-637945070583397301.jpg?v=1658874344' },
    { id: 4, name: 'Laptop', price: 899, image: 'https://my-store.msi.com/cdn/shop/files/M15B13M_1_869x869.png?v=1712221181'},
  ];

  const addToCart = (product) => {
    const newCart = [...cartItems, product];
    setCartItems(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  return (
    <div className="App">
      <Navbar cartCount={cartItems.length} />
      <div className="products-grid">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default App;