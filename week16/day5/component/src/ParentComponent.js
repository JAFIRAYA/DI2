import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const cardsData = [
    { icon: '🌞', label: 'Sun', number: 1 },
    { icon: '🌦️', label: 'Clouds', number: 2 },
    { icon: '🌧️', label: 'Rain', number: 3 },
    { icon: '❄️', label: 'Snow', number: 4 },
    { icon: '🌪️', label: 'Storm', number: 5 },
  ];

  return (
    <div className="parent">
      {cardsData.map((card, index) => (
        <ChildComponent
          key={index}
          icon={card.icon}
          label={card.label}
          number={card.number}
        />
      ))}
    </div>
  );
};

export default ParentComponent;
