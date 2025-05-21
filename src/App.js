import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Basket from './components/Basket';
import Product from './components/Product';

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const removeFromCart = (index) => {
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    setCartItems(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const products = [
    { id: 1, name: 'Wireless Headphones', price: 99.99, image: 'https://jblstore.com.ph/cdn/shop/files/Tune720BT_Blue_1.png?v=1747046882' },
    { id: 2, name: 'Smart Watch', price: 199.99, image: 'https://www.istudiosg.com/cdn/shop/files/Apple_Watch_Series_10_42mm_GPS_Silver_Aluminum_Sport_Band_Denim_PDP_Image_Position_1__GBEN.jpg?v=1727185024' },
    { id: 3, name: 'Bluetooth Speaker', price: 59.99, image: 'https://www.jbhifi.com.au/cdn/shop/products/597794-Product-0-I-637945070583397301.jpg?v=1658874344' },
    { id: 4, name: 'Laptop', price: 899, image: 'https://my-store.msi.com/cdn/shop/files/M15B13M_1_869x869.png?v=1712221181'},
    { id: 5, name: 'Keyboard', price: 78.99, image: 'https://www.electroniksindia.com/cdn/shop/files/sk61-61-key-mechanical-keyboard-usb-wired-led-backlit-axis-gaming-mechanical-keyboard-gateron-optical-switches-for-desktop-by-electroniksindia-262_1800x1800.webp?v=1739154267'},
  ];

  const addToCart = (product) => {
    const newCart = [...cartItems, product];
    setCartItems(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <Router>
      <div className="App">
        <Navbar cartCount={cartItems.length} />
        
        <Routes>
          <Route path="/ecommerce-landing" element={
            <div className="products-grid">
              {products.map((product) => (
                <Product key={product.id} product={product} addToCart={addToCart} />
              ))}
            </div>
          } />
          
          <Route path="/basket" element={
            <Basket 
              cartItems={cartItems} 
              removeFromCart={removeFromCart}
              cartTotal={cartTotal}
            />
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;