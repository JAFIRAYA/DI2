import React from 'react';
import { connect } from 'react-redux';
import { selectMovie } from '../actions';

const MovieList = ({ movies, selectMovie }) => {
  return (
    <div>
      <h2>Movie List</h2>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            {movie.title}
            <button onClick={() => selectMovie(movie)}>Select</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

export default connect(mapStateToProps, { selectMovie })(MovieList);
