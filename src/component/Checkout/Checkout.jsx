import React, { useState, useEffect } from 'react';
import './Checkout.css';
import { Link } from 'react-router-dom';
import { FiTrash, FiInfo } from 'react-icons/fi';
import Navbar from '../TopNavbar/TopNavbar';
import { PaystackButton } from 'react-paystack';

function Checkout() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [showShippingInfo, setShowShippingInfo] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentError, setPaymentError] = useState(false);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(items);
  }, []);

  useEffect(() => {
    const valid = name && email && address && city && state && zip;
    setIsFormValid(valid);
  }, [name, email, address, city, state, zip]);

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleAddressChange(event) {
    setAddress(event.target.value);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleStateChange(event) {
    setState(event.target.value);
  }

  function handleZipChange(event) {
    setZip(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Perform checkout logic, e.g., submit form data to server for processing
    // You can access the form values using the state variables (name, email, address, etc.)

    // Simulating successful payment (you can replace this with your actual payment processing logic)
    // Assuming the payment was successful, display success message and clear cart and form
  
  }

  function handlePaymentError(error) {
    // Handle payment error here (optional)
    console.log('Payment error:', error);
    setPaymentError(true); // Display error message (you can use this state to conditionally render an error message)
  }

  function clearCartItemsAndForm() {
    localStorage.removeItem('cartItems');
    setCartItems([]);
    setName('');
    setEmail('');
    setAddress('');
    setCity('');
    setState('');
    setZip('');
  }

  const subTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = calculateShipping(city); // Implement the logic to calculate shipping based on the city

  function calculateShipping(city) {
    // Implement your shipping calculation logic based on the city
    // You can use conditionals or switch statements to determine the shipping cost
    // Return the shipping cost based on the city
    return 10; // Default shipping cost for example
  }

  const totalPrice = subTotal + shipping;

  const handleShowShippingInfo = () => {
    setShowShippingInfo(true);
  };

  const handleCloseShippingInfo = () => {
    setShowShippingInfo(false);
  };

  const handlePaymentSuccess = (response) => {
    // Handle successful payment here
    alert(
      `Your purchase was successful! Transaction reference: ${response}`
    );
    console.log('Payment successful', response);
    clearCartItemsAndForm();
    setPaymentSuccess(true); 
  };

  const handlePaymentClose = () => {
    // Handle payment modal close here
    alert('you closed the payment');
    console.log('Payment modal closed');
    setPaymentError(true);
  };

  const publicKey = 'pk_test_0be6555dbb4da8bb761c496e7defb91276740681';

  return (
    <>
      <Navbar />
      <div className="checkout-container">
        <div className="checkout-details">
          <h3>Item Details</h3>
          <table className="checkout-items-table">
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img src={item.image} alt={item.name} className="checkout-item-image" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="checkout-subtotal">Subtotal: ${subTotal}</div>
          <div className="checkout-shipping">Shipping: ${shipping}</div>
          <div className="shipping-info-button" onClick={handleShowShippingInfo}>
            <FiInfo className="info-icon" />
          </div>
          <div className="shipping-info-dialog" style={{ display: showShippingInfo ? 'block' : "none" }}>
            <div className="shipping-info-dialog-content">
              <h2>Shipping Information</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a tincidunt arcu. In ac massa eget risus
                sodales lacinia vitae et diam. Sed placerat enim eget posuere consectetur. Nulla facilisi. Fusce lobortis
                enim quis urna rutrum, eget venenatis justo pretium.
              </p>
              <button className="close-button" onClick={handleCloseShippingInfo}>
                Close
              </button>
            </div>
          </div>
          <div className="checkout-total">Total: ₦{totalPrice}</div>
        </div>

        <div className="checkout-summary">
          <h3>Shipping Information</h3>
          <form className="checkout-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input type="text" id="name" value={name} onChange={handleNameChange} placeholder="Name:" />
            </div>
            <div className="form-row">
              <input type="email" id="email" value={email} onChange={handleEmailChange} placeholder="Email:" />
            </div>
            <div className="form-row">
              <input type="text" id="address" value={address} onChange={handleAddressChange} placeholder="Address:" />
            </div>
            <div className="form-row">
              <input type="text" id="city" value={city} onChange={handleCityChange} placeholder="City:" />
            </div>
            <div className="form-row">
              <input type="text" id="state" value={state} onChange={handleStateChange} placeholder="State:" />
            </div>
            <div className="form-row">
              <input type="text" id="zip" value={zip} onChange={handleZipChange} placeholder="ZIP:" />
            </div>
            <div className="checkout-actions">
              <PaystackButton
                text="Pay"
                className="pay-button"
                onSuccess ={handlePaymentSuccess}
                onError={handlePaymentError} // Handle payment error
                onClose={handlePaymentClose}
                disabled={!isFormValid} // Disable button if any field is empty
                embed={true}
                reference={`checkout-${Date.now()}`}
                email={email}
                amount={totalPrice * 100} // Paystack amount is in kobo (multiplying by 100)
                name ={name}
                publicKey={publicKey}
                tag="button"
              />
              <div className="back-to-cart">
                <Link to="/cart">Back to Cart</Link>
              </div>
            </div>
          </form>
          {paymentSuccess && (
          <div className="success-message">
            Your payment was successful! Details about your order should be displayed here.
          </div>
        )}
        {paymentError && (
          <div className="error-message">
            There was an error processing your payment. Please try again later.
          </div>
        )}
        </div>
      </div>
    </>
  );
}

export default Checkout;
