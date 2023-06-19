import React, { useState } from "react";
import "./TopNavbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);

  function handleMenuToggle() {
    setMenuOpen(!menuOpen);
  }

  function handleProductDropdownToggle() {
    setProductDropdownOpen(!productDropdownOpen);
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to={"/"}>Palletdecore </Link>
      </div>
      <button className="navbar__toggle" onClick={handleMenuToggle}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search" />
          <button className="search-button">
            <FaSearch />
          </button>
        </div>
        <div className="centered-links">
        <Link to={"/"} className="navbar__link">
            Home
          </Link>
          <div className="navbar__dropdown">
            <Link
              
              className="navbar__link navbar__link--dropdown"
              onClick={handleProductDropdownToggle}
            >
              Product
            </Link>
            {productDropdownOpen && (
              <div className="navbar__dropdown-content">
                <Link to={"/product"} className="navbar__dropdown-item">
                  All Products
                </Link>
                <Link to={"/lounges"} className="navbar__dropdown-item">
                  Lounges
                </Link>
                <Link to={"/accent-tables"} className="navbar__dropdown-item">
                  Accent Tables
                </Link>
                <Link to={"/accent-chairs"} className="navbar__dropdown-item">
                  Accent Chairs
                </Link>
                <Link to={"/bedroom-collection"} className="navbar__dropdown-item">
                  Bedroom Collection
                </Link>
                <Link to={"/dining-collection"} className="navbar__dropdown-item">
                  Dining Collection
                </Link>
                <Link to={"/storage"} className="navbar__dropdown-item">
                  Storage
                </Link>
              </div>
            )}
          </div>
          <Link to={"/about"} className="navbar__link">
            About Us
          </Link>
          <Link to={"/contact"} className="navbar__link">
            Contact Us
          </Link>
          <div className="user-actions">
            <Link to={"/login"} className="button">
              Login
            </Link>
            <Link to={"/cart"} className="button">
              Cart
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
