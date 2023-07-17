import React from 'react';
import './Cards.css';
import image from '../../assets/sofa.png';
import { Link } from 'react-router-dom';


const photoData = [
  {
    id: 1,
    image: image,
    name: 'Accent chair',
  },
  {
    id: 2,
    image: image,
    name: 'Lounges',
  },
  {
    id: 3,
    image: image,
    name: 'Accent tables',
  },
];

function PhotoCard() {
  return (
    <div className="photo-card-container">
      
      {photoData.map((item) => (
        <Link key={''} to={''}>
        <div key={item.id} className="photo-card">
          <img src={item.image} alt={item.name} className="photo-card-image" />
          <p className="photo-card-name">{item.name}</p>
        </div></Link>
      ))}
    </div>
  );
}

export default PhotoCard;
