import React from 'react';
import './Cards.css';
import image from '../../assets/sofa.png';

const photoData = [
  {
    id: 1,
    image: image,
    name: 'Item 1',
  },
  {
    id: 2,
    image: image,
    name: 'Item 2',
  },
  {
    id: 3,
    image: image,
    name: 'Item 3',
  },
];

function PhotoCard() {
  return (
    <div className="photo-card-container">
      {photoData.map((item) => (
        <div key={item.id} className="photo-card">
          <img src={item.image} alt={item.name} className="photo-card-image" />
          <p className="photo-card-name">{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export default PhotoCard;
