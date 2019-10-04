import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
// import ErrorHandler from './ErrorHandler';

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  handleClick = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  }

  render() {
    const { counter } = this.state;
    if (counter === 5) {
      throw new Error('I crashed');
    }
    return <Button block onClick={this.handleClick}>{counter}</Button>;
  }
}

export default BuggyCounter;
