import React from 'react';
import './Grid.css';
import image from '../../assets/sofa.png';

const Grid = () => {
  return (
    <div className="grid-container">
      <a href="path/to/link1" className="grid-item grid-item-large">
        <img src={image} alt="Image 1" />
        <div className="image-text">Image 1</div>
      </a>
      <a href="path/to/link2" className="grid-item grid-item-small">
        <img src={image} alt="Image 2" />
        <div className="image-text">Image 2</div>
      </a>
      <a href="path/to/link3" className="grid-item grid-item-small">
        <img src={image} alt="Image 3" />
        <div className="image-text">Image 3</div>
      </a>
    </div>
  );
};

export default Grid;
