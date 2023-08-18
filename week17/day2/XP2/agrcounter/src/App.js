import React from 'react';
import { connect } from 'react-redux';

const App = ({ age, onAgeUp, onAgeDown }) => {
  return (
    <div>
      <h1>Age: <span>{age}</span></h1>
      <button onClick={onAgeUp}>Age Up</button>
      <button onClick={onAgeDown}>Age Down</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    age: state.age,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch({ type: 'AGE_UP' }),
    onAgeDown: () => dispatch({ type: 'AGE_DOWN' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
