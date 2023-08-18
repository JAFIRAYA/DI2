// src/reducers/index.js
import { combineReducers } from 'redux';
import {
  SEARCH_MOVIE,
  FETCH_MOVIES,
  FETCH_MOVIE,
  LOADING,
} from '../actions';

const initialState = {
  text: '',
  movies: [],
  loading: false,
  movie: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        text: action.payload,
        loading: false,
      };
    
    default:
      return state;
  }
};

export default combineReducers({
  rootReducer,
 
});
