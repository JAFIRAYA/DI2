import React from 'react';


const Card = ({ superhero, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(superhero)}>
      <img src={superhero.image} alt={superhero.name} />
      <p>{superhero.name}</p>
    </div>
  );
};

export default Card;