import React from 'react';
import './Card.css';

const Card = ({ id, name, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={`images/${id}.jpg`} alt={name} />
    </div>
  );
};

export default Card;
