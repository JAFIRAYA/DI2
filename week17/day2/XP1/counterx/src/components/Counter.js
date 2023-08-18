import React from 'react';
import { connect } from 'react-redux';

const Counter = ({ count, increment, decrement, incrementIfOdd, incrementAsync }) => {
  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={incrementIfOdd}>Increment If Odd</button>
      <button onClick={incrementAsync}>Increment Async</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
    incrementIfOdd: () => {
      const currentState = store.getState();
      if (currentState.count % 2 !== 0) {
        dispatch({ type: 'INCREMENT' });
      }
    },
    incrementAsync: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch({ type: 'INCREMENT' });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
