import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const GameBoard = () => {
  const [superheroes, setSuperheroes] = useState([]);
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [clickedSuperheroes, setClickedSuperheroes] = useState([]);

  useEffect(() => {
    axios.get('/path/to/superheroesData.json') 
      .then(response => setSuperheroes(response.data))
      .catch(error => console.error('Error fetching superheroes data:', error));
  }, []);

  const shuffleCards = () => {
    const shuffledSuperheroes = [...superheroes].sort(() => 0.5 - Math.random());
    setSuperheroes(shuffledSuperheroes);
  };

  const handleClick = (superhero) => {
    if (clickedSuperheroes.includes(superhero.id)) {
     
      setScore(0);
      setClickedSuperheroes([]);
    } else {
     
      setScore(prevScore => prevScore + 1);
      setClickedSuperheroes(prevClicked => [...prevClicked, superhero.id]);
    }
  };

  useEffect(() => {
    if (score > topScore) {
      setTopScore(score);
    }
  }, [score, topScore]);

  return (
    <div className="game-board">
      {superheroes.map(superhero => (
        <Card
          key={superhero.id}
          superhero={superhero}
          onClick={handleClick}
        />
      ))}
      <button onClick={shuffleCards}>Shuffle Cards</button>
    </div>
  );
};

export default GameBoard;
