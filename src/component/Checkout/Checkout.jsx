import React, { useState } from "react";
import "./Checkout.css";

function Checkout() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

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
  }

  return (
    <div className="checkout-container">
      <div className="checkout-details">
        <h3>Item Details</h3>
        {/* Display item details here */}
      </div>

      <div className="checkout-summary">
        <h2>Checkout</h2>
        <h3>Shipping Information</h3>
        <form className="checkout-form" onSubmit={handleSubmit}>
        <div className="form-row">

          <input type="text" id="name" value={name} onChange={handleNameChange} placeholder="Name:"/>
        </div>
        <div className="form-row">
        
          <input type="email" id="email" value={email} onChange={handleEmailChange} placeholder="Email:"/>
        </div>
        <div className="form-row">
          <input type="text" id="address" value={address} onChange={handleAddressChange} placeholder="Address:"/>
        </div>
        <div className="form-row">

          <input type="text" id="city" value={city} onChange={handleCityChange}  placeholder="City:"/>
        </div>
        <div className="form-row">
         
          <input type="text" id="state" value={state} onChange={handleStateChange} placeholder="State:" />
        </div>
        <div className="form-row">
          <input type="text" id="zip" value={zip} onChange={handleZipChange} placeholder="ZIP:" />
        </div>
      </form>
        <div className="checkout-actions">
          <button type="submit">Pay</button>
          <div className="back-to-cart">
            <a href="/cart">Back to Cart</a>
          </div>
          <div className="direction-icon">
            {/* Add your direction icon component here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
