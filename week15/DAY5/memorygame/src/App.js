import React, { Component } from 'react';
import './App.css';
import Card from './Card';

const superheroes = [
  { id: 1, name: 'Superman' },
  { id: 2, name: 'Batman' },
  
];

class App extends Component {
  state = {
    cards: superheroes,
    clickedCards: [],
    score: 0,
    topScore: 0,
  };

  shuffleCards = () => {
    const shuffledCards = [...this.state.cards];
    for (let i = shuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
    }
    this.setState({ cards: shuffledCards });
  };

  handleCardClick = (id) => {
    if (this.state.clickedCards.includes(id)) {
      this.setState({ clickedCards: [], score: 0 });
    } else {
      this.setState(
        (prevState) => ({
          clickedCards: [...prevState.clickedCards, id],
          score: prevState.score + 1,
          topScore: Math.max(prevState.topScore, prevState.score + 1),
        }),
        this.shuffleCards
      );
    }
  };

  render() {
    return (
      <div className="App">
        <nav>
          <h1>Superheroes Memory Game</h1>
          <p>Score: {this.state.score}</p>
          <p>Top Score: {this.state.topScore}</p>
        </nav>
        <div className="card-container">
          {this.state.cards.map((hero) => (
            <Card
              key={hero.id}
              id={hero.id}
              name={hero.name}
              onClick={() => this.handleCardClick(hero.id)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
