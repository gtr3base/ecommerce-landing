import React from 'react';
import '../Basket.css';

const Basket = ({ cartItems, removeFromCart, addToCart }) => {

  const groupedItems = cartItems.reduce((acc, item) => {
    const existingItem = acc.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
      existingItem.totalPrice += item.price;
    } else {
      acc.push({
        ...item,
        quantity: 1,
        totalPrice: item.price
      });
    }
    return acc;
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const handleRemove = (itemId) => {
    const indexToRemove = cartItems.findIndex(item => item.id === itemId);
    if(indexToRemove !== -1){
      removeFromCart(indexToRemove);
    }
  };

  const handleAdding = (item) => {
    addToCart(item);
  };
  return (
    <div className="basket-container">
      <h2 className="basket-title">Your Shopping Cart</h2>
      {groupedItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {groupedItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="cart-item-image" 
                />
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-price">${item.price.toFixed(2)}</p>
                  <p className="quantity-text">x{item.quantity}</p>
                  <p className="item-total">Total: ${item.totalPrice.toFixed(2)}</p>
                  <div className="buttons">
                  <button 
                    className="remove-button"
                    onClick={() => handleRemove(item.id)}
                  >
                    ➖
                  </button>
                  <button 
                    className="add-more"
                    onClick={() => handleAdding(item)}>
                      ➕
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3 className="total-text">Total: ${calculateTotal()}</h3>
          </div>
        </>
      )}
      <button 
        className="continue-shopping-button"
        onClick={() => window.location.href = '/ecommerce-landing'}
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default Basket;