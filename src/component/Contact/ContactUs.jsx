import React, { useState } from 'react';
import './ContactUs.css';
import Navbar from '../TopNavbar/TopNavbar';
import Footer from '../Footer/Footer';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');

  const handleInputChange = (event, setter) => {
    setter(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
  <>
  <Navbar/>
    <div className="contact-us">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => handleInputChange(e, setName)}
            required
          />
          <label htmlFor="name" className={name ? 'active' : ''}>
            Name
          </label>
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => handleInputChange(e, setEmail)}
            required
          />
          <label htmlFor="email" className={email ? 'active' : ''}>
            Email
          </label>
        </div>
        <div className="form-group">
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => handleInputChange(e, setPhone)}
            required
          />
          <label htmlFor="phone" className={phone ? 'active' : ''}>
            Phone Number
          </label>
        </div>
        <div className="form-group">
          <textarea
            id="comment"
            name="comment"
            value={comment}
            onChange={(e) => handleInputChange(e, setComment)}
            required
          ></textarea>
          <label htmlFor="comment" className={comment ? 'active' : ''}>
            Comment
          </label>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default ContactUs;
