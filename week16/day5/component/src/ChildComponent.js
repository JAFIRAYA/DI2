import React from 'react';

const ChildComponent = ({ icon, label, number }) => {
  return (
    <div className="card">
      <div className="icon">{icon}</div>
      <h3>{label}</h3>
      <p>{number}</p>
    </div>
  );
};

export default ChildComponent;
