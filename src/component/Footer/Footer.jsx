import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FiTwitter,FiInstagram,FiFacebook } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3 className="footer-section-title">Customer Care</h3>
        <ul className="footer-links">
          <li>
            <a href="#">Customer@pallet.com</a>
          </li>
          <li>
            <a href="#">Customer@pallet.com</a>
          </li>
          <li>
            <Link to={"/shipping"}>Shipping</Link>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3 className="footer-section-title">Company</h3>
        <ul className="footer-links">
          <li>
            <Link to={"/about"}>about</Link>
          </li>
          <li>
            <a href="#">Our Team</a>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3 className="footer-section-title">Ways to Shop</h3>
        <ul className="footer-links">
          <li>
            <Link to={"/Online"}>Online</Link>
          </li>
          <li>
            <Link to={"/contact"}>In Store</Link>
          </li>
        </ul>
      </div>
      <div className="footer-section footer-section-right">
        <ul className="footer-social-icons">
          <li>
            <a href="#">
              <FiTwitter/>
            </a>
          </li>
          <li>
            <a href="#">
            <FiFacebook/>
            </a>
          </li>
          <li>
            <a href="#">
            <FiInstagram/>
            </a>
          </li>
        </ul>
        <p className="footer-copyright">
          &copy; 2023 Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
