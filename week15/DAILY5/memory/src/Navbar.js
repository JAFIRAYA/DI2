import React from 'react';

const Navbar = ({ currentScore, topScore }) => {
  return (
    <nav>
      <div>
        Current Score: {currentScore}
      </div>
      <div>
        Top Score: {topScore}
      </div>
    </nav>
  );
};

export default Navbar;
