import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMovie, setLoading } from '../actions';

const Movie = ({ match, movie, fetchMovie, setLoading }) => {
  useEffect(() => {
    fetchMovie(match.params.id);
    setLoading();
    
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 card card-body">
          <img src={movie.Poster} className="thumbnail" alt="Poster" />
        </div>
        <div className="col-md-8">
          <h2 className="mb-4">{movie.Title}</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Genre:</strong> {movie.Genre}
            </li>
            <li className="list-group-item">
              <strong>Released:</strong> {movie.Released}
            </li>
            <li className="list-group-item">
              <strong>Rated:</strong> {movie.Rated}
            </li>
           
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="card card-body bg-dark my-5 text-light">
          <div className="col-md-12">
            <h3>About </h3>
            {movie.Plot}
            <hr />
            <a
              href={'https://www.imdb.com/title/' + movie.imdbID}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View on IMDb
            </a>
            <Link to="/" className="btn btn-default text-light">
              Go Back To Search
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movie: state.rootReducer.movie,
});

export default connect(mapStateToProps, { fetchMovie, setLoading })(Movie);
