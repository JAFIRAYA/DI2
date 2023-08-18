

import React from 'react';
import { connect } from 'react-redux';
import { increaseCount, decreaseCount } from '../actions';

const Counter = (props) => {
  return (
    <div>
      <h1>Counter App with Redux</h1>
      <p>Count: {props.count}</p>
      <button onClick={props.increase}>+</button>
      <button onClick={props.decrease}>-</button>
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
    increase: () => dispatch(increaseCount()),
    decrease: () => dispatch(decreaseCount()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
