import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TopNavbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaSearch, FaChevronDown, FaChevronUp } from 'react-icons/fa';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [innerDropdownOpen, setInnerDropdownOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('https://palletedecore.onrender.com/api/category/all-categories');
      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  function handleMenuToggle() {
    setMenuOpen(!menuOpen);
    setInnerDropdownOpen(false);
  }

  function handleInnerDropdownToggle() {
    setInnerDropdownOpen(!innerDropdownOpen);
  }

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    searchProduct();
  };

  const searchProduct = async () => {
    try {
      const response = await axios.get(`https://palletedecore.onrender.com/api/products?search=${searchQuery}`);
      if (response.data.length > 0) {
        navigate(`/item/${response.data[0].id}`);
      } else {
        navigate('/not-found');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to={'/'}>Pallet deCore </Link>
      </div>
      <button className="navbar__toggle" onClick={handleMenuToggle}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
        <div className="search-container">
          <form className="search-form" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              className="search-input"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
            <button className="search-button">
              <FaSearch />
            </button>
          </form>
        </div>
        <div className="centered-links">
          <Link to={'/'} className="navbar__link">
            Home
          </Link>
          <div className="navbar__dropdown">
            <Link
              className={`navbar__link navbar__link--dropdown ${innerDropdownOpen ? 'navbar__link--active' : ''}`}
              onClick={handleInnerDropdownToggle}
            >
              Product
              {innerDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
            </Link>
            {innerDropdownOpen && (
              <div className="navbar__inner-dropdown-content">
                {categories.map((category) => (
                  <Link to={`/${category.name}`} className="navbar__dropdown-item" key={category.id}>
                    {category.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to={'/about'} className="navbar__link">
            About Us
          </Link>
          <Link to={'/contact'} className="navbar__link">
            Contact Us
          </Link>
          <div className="user-actions navbar__link">
            {/* <Link to={"/login"} className="button">
              Login
            </Link> */}
            <Link to={'/cart'} className="button-89" role="button">
              Cart
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
