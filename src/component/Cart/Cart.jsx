import React from 'react';
import './Cart.css';
import Navbar from '../TopNavbar/TopNavbar';
import Footer from '../Footer/Footer';

const Cart = () => {
  return (
    <>
    <Navbar/>
    <div className="cart">
      <h2>Your Cart</h2>
      {/* Cart items */}
      <ul className="cart-items">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      {/* Total */}
      <h3>Total: $100</h3>
      {/* Checkout button */}
      <button className="checkout-button">Checkout</button>
    </div>
    <Footer/>
    </>
  );
};

export default Cart;
