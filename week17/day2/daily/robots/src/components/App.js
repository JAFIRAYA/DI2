import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestRobots } from '../actions';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { robots, isPending } = this.props;

    return (
      <div className="tc">
        <h1 className="f1">Robot Friends</h1>
        <SearchBox />
        {isPending ? (
          <h2>Loading...</h2>
        ) : (
          <CardList robots={robots} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    robots: state.robots.robots,
    isPending: state.robots.isPending,
    error: state.robots.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
