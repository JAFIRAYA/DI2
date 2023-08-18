import React from 'react';
import SearchForm from './SearchForm';
import MoviesContainer from './MoviesContainer';

const Landing = () => (
  <div className="container">
    <SearchForm />
    <MoviesContainer />
  </div>
);

export default Landing;
