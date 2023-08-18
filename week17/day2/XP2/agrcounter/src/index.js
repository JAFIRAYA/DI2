import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import App from './App';

const logAction = (store) => (next) => (action) => {
  console.log('Action:', JSON.stringify(action));
  return next(action);
};

const store = createStore(reducer, applyMiddleware(logAction));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
