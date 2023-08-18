import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchMovie } from '../actions';

const SearchForm = ({ searchMovie }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    searchMovie(text);
  };

  return (
    <div className="jumbotron jumbotron-fluid mt-5 text-center">
      <div className="container">
        <h1 className="display-4 mb-3">
          <i className="fa fa-search" /> Search for a movie, TV series...
        </h1>
        <form id="searchForm" onSubmit={onSubmit}>
          <input
            type="text"
            className="form-control"
            name="searchText"
            placeholder="Search Movies, TV Series..."
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit" className="btn btn-primary btn-bg mt-3">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default connect(null, { searchMovie })(SearchForm);
