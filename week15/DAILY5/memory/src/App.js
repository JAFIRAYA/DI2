import React from 'react';
import './App.css';
import Navbar from './Navbar';
import GameBoard from './GameBoard';

const App = () => {
  return (
    <div className="App">
      <Navbar currentScore={1} topScore={3} />
      <GameBoard />
    </div>
  );
};

export default App;

