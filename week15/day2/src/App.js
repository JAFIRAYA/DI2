
/*

------------->Exercice1
import React, { Component } from 'react';

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    if (this.state.counter === 4) {
      throw new Error('I crashed!');
    }
  };

  render() {
    return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
  }
}

export default BuggyCounter;

import React from 'react';
import BuggyCounter from './BuggyCounter';
import ErrorBoundary from './ErrorBoundary';

const App = () => {
  return (
    <div className="App">
      <h2>Simulation 1:</h2>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <h2>Simulation 2:</h2>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <h2>Simulation 3:</h2>
      <BuggyCounter />
    </div>
  );
};

export default App;

------------->Exercice2


import React, { Component } from 'react';

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      favoriteColor: 'red',
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: 'yellow' });
    }, 2000);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('after update');
  }

  handleClick = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    if (this.state.counter === 4) {
      throw new Error('I crashed!');
    }
  };

  render() {
    return (
      <div>
        <h1 onClick={this.handleClick}>{this.state.counter}</h1>
        <h2>Favorite Color: {this.state.favoriteColor}</h2>
      </div>
    );
  }
}

export default BuggyCounter;

import React from 'react';
import BuggyCounter from './BuggyCounter';

const App = () => {
  return (
    <div className="App">
      <BuggyCounter />
    </div>
  );
};

export default App;

------------->Exercice3


import React, { Component } from 'react';

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      favoriteColor: 'red',
      show: true,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: 'yellow' });
    }, 2000);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('after update');
  }

  componentWillUnmount() {
    alert('Unmounted');
  }

  handleClick = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    if (this.state.counter === 4) {
      throw new Error('I crashed!');
    }
  };

  handleDelete = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        {this.state.show && <Child />}
        <h1 onClick={this.handleClick}>{this.state.counter}</h1>
        <h2>Favorite Color: {this.state.favoriteColor}</h2>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}

class Child extends Component {
  componentWillUnmount() {
    alert('Delete');
  }

  render() {
    return <h1>Hello World!</h1>;
  }
}

export default BuggyCounter;


------------->Daily


import React, { Component } from 'react';
import FormComponent from './FormComponent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      destination: '',
      vegan: false,
      lactoseFree: false,
    };
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    type === 'checkbox'
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, age, gender, destination, vegan, lactoseFree } =
      this.state;
    const queryParams = `firstName=${firstName}&lastName=${lastName}&age=${age}&gender=${gender}&destination=${destination}&vegan=${vegan}&lactoseFree=${lactoseFree}`;
    window.location.href = `http://localhost:3000/?${queryParams}`;
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
            placeholder="First Name"
          />
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
            placeholder="Last Name"
          />
          <input
            type="text"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
            placeholder="Age"
          />
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === 'male'}
              onChange={this.handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === 'female'}
              onChange={this.handleChange}
            />
            Female
          </label>
          <select
            name="destination"
            value={this.state.destination}
            onChange={this.handleChange}
          >
            <option value="">Select destination</option>
            <option value="Japan">Japan</option>
            <option value="Germany">Germany</option>
            <option value="Spain">Spain</option>
            <option value="France">France</option>
          </select>
          <label>
            <input
              type="checkbox"
              name="vegan"
              checked={this.state.vegan}
              onChange={this.handleChange}
            />
            Vegan
          </label>
          <label>
            <input
              type="checkbox"
              name="lactoseFree"
              checked={this.state.lactoseFree}
              onChange={this.handleChange}
            />
            Lactose Free
          </label>
          <button>Submit</button>
        </form>
        <FormComponent formData={this.state} />
      </div>
    );
  }
}

export default App;



*/

