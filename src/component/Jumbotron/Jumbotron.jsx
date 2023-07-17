import React from 'react';
import './Jumbotron.css';
import { Link } from 'react-router-dom';

function Jumbotron() {
  return (
    <div className="jumbotron">
      <div className="content">
        <h1 className="title">New Arrival</h1>
        <p className="subtitle">Discover our latest collection</p>
        <Link to={'/product'} className="link">Shop Now</Link>
      </div>
    </div>
  );
}

export default Jumbotron;
