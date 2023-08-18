

import React from 'react';
import './App.css';
import { createStore } from 'redux'; 
import { Provider } from 'react-redux'; 
import counterReducer from './reducers'; 
import Counter from './components/Counter'; 

const store = createStore(counterReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
