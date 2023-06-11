import React from 'react';
import './Cards.css';
import sofa from "../../assets/sofa.png";

const cardsData = [
  {
    id: 1,
    image: sofa,
    label: 'Lounges',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: 'https://example.com/card1',
  },
  {
    id: 2,
    image: sofa,
    label: 'Accent Chairs',
    content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: 'https://example.com/card2',
  },
  {
    id: 3,
    image: sofa,
    label: 'Dinning Collection',
    content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    link: 'https://example.com/card3',
  },
];

function Cards() {
  return (
    <div className="cards">
      <h2 className="header">Featured Cards</h2>
      <div className="cards-container">
        {cardsData.map((card) => (
          <a key={card.id} href={card.link} className="card-link">
            <div className="card">
              <img src={card.image} alt="Card" className="card-image" />
              <div className="card-overlay">
                <div className="card-label">{card.label}</div>
                <div className="card-content">{card.content}</div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Cards;
