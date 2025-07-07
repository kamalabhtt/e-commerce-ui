import React, { useState } from 'react';
import './CartPage.css';
import nikeAirMax from '../assets/nike-airmax.png';
import adidasHoodie from '../assets/adidashoodie.png';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Nike Air Max',
      brand: 'Nike',
      price: 6500,
      quantity: 2,
      image: nikeAirMax,
    },
    {
      id: 2,
      name: 'Adidas Hoodie',
      brand: 'Adidas',
      price: 3200,
      quantity: 1,
      image: adidasHoodie,
    },
  ]);

  const handleQuantityChange = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <div className="cart-items">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="item-info">
                <h3>{item.name}</h3>
                <p className="brand">Brand: {item.brand}</p>
                <p className="price">Price: Rs. {item.price}</p>
                <div className="quantity">
                  <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                </div>
              </div>
              <div className="item-actions">
                <button onClick={() => removeItem(item.id)} className="remove">Remove</button>
                <p className="total">Total: Rs. {item.price * item.quantity}</p>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="cart-summary">
        <h2>Price Summary</h2>
        <div className="summary-details">
          <p>Total Items: {cartItems.length}</p>
          <p>Total Price: Rs. {totalPrice}</p>
        </div>
        <hr />
        <h3>Grand Total: Rs. {totalPrice}</h3>
        <button className="checkout">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
