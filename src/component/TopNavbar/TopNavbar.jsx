import React from "react";
import "./TopNavbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav>
        <div className="logo">Palletdecore</div>
        <ul className="nav-links">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/product"}>Product</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <a href="#">Link 5</a>
          </li>
          <li>
            <a href="#">Link 6</a>
          </li>
        </ul>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </div>
        <div className="user-actions">
          <button className="button">Login</button>
          <Link to={"/cart"} className="button">Cart</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
