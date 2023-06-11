import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3 className="footer-section-title">Customer Care</h3>
        <ul className="footer-links">
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
          <li><a href="#">Link 4</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3 className="footer-section-title">Company</h3>
        <ul className="footer-links">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Our Team</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3 className="footer-section-title">Ways to Shop</h3>
        <ul className="footer-links">
          <li><a href="#">Online</a></li>
          <li><a href="#">In-Store</a></li>
          <li><a href="#">Mobile App</a></li>
        </ul>
      </div>
      <div className="footer-section footer-section-right">
        <ul className="footer-social-icons">
          <li><a href="#"><i className="fa fa-facebook"></i></a></li>
          <li><a href="#"><i className="fa fa-twitter"></i></a></li>
          <li><a href="#"><i className="fa fa-instagram"></i></a></li>
        </ul>
        <p className="footer-copyright">
          &copy; 2023 Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;