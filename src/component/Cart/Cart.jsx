import React, { useState } from 'react';
import './Cart.css';
import Navbar from '../TopNavbar/TopNavbar';
import Footer from '../Footer/Footer';
import { FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const [showModal, setShowModal] = useState(false);
  const [deleteItemIndex, setDeleteItemIndex] = useState(null);

  const handleDeleteItem = (index) => {
    setDeleteItemIndex(index);
    setShowModal(true);
  };

  const confirmDeleteItem = () => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(deleteItemIndex, 1);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    setDeleteItemIndex(null);
    setShowModal(false);
    window.location.reload(); // Refresh the page to reflect the changes
  };

  const cancelDeleteItem = () => {
    setDeleteItemIndex(null);
    setShowModal(false);
  };

  return (
    <>
      <Navbar />
      <div className="cart">
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty! Browse through our categories and discover our best deals.</p>
            <Link to="/All Category" className="browse-button">
              Browse Products
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-table-container">
              <table className="cart-table">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <img src={item.image} alt={item.name} className="cart-item-image" />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>${item.price * item.quantity}</td>
                      <td>
                        <button onClick={() => handleDeleteItem(index)}>
                          <FiTrash className="icon" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="cart-total">Total: ${totalPrice}</div>
            <Link to={'/checkout'} className="checkout-button">
              Checkout
            </Link>
            {showModal && (
              <div className="modal">
                <div className="modal-content">
                  <h3>Confirm Deletion</h3>
                  <p>Are you sure you want to delete this item from the cart?</p>
                  <div className="modal-buttons">
                    <button onClick={confirmDeleteItem}>Delete</button>
                    <button onClick={cancelDeleteItem}>Cancel</button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
