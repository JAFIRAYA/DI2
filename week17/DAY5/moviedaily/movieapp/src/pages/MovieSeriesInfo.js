import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Landing from './Landing';
import Movie from '../components/Movie';
import Footer from '../components/Footer';

const MovieSeriesInfo = () => (
  <Router>
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Landing} />
      <Route exact path="/movie/:id" component={Movie} />
      <Footer />
    </div>
  </Router>
);

export default MovieSeriesInfo;
