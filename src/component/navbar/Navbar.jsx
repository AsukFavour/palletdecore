import React from 'react';
import './Navbar.css'

function Navbar() {
  return (
    <header>
      <nav>
        <div className="logo">Logo</div>
        <ul className="nav-links">
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
          <li><a href="#">Link 4</a></li>
          <li><a href="#">Link 5</a></li>
          <li><a href="#">Link 6</a></li>
        </ul>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </div>
        <div className="user-actions">
          <button>Login</button>
          <button>Add to Cart</button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
