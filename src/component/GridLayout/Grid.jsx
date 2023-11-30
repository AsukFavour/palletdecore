import React from 'react';
import './Grid.css';
import image from '../../assets/sofa.png';

const Grid = () => {
  return (
    <div className="grid-container">
      <a href="path/to/link1" className="grid-item grid-item-large">
        <img src={image} alt="Image 1" />
        <div className="image-text">Lounges</div>
      </a>
      <a href="path/to/link2" className="grid-item grid-item-small">
        <img src={image} alt="Image 2" />
        <div className="image-text">Bedroom collection</div>
      </a>
      <a href="path/to/link3" className="grid-item grid-item-small">
        <img src={image} alt="Image 3" />
        <div className="image-text">Dining collection</div>
      </a>
    </div>
  );
};

export default Grid;
