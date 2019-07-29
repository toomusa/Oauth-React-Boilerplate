import React, { Component } from 'react';
import Button from "../components/Button/CounterButton";

class Counter extends Component {
  state = {
    counter: 0
  }

  handleIncrement = () => {
    this.setState({counter: this.state.counter + 1});
  }

  handleDecrement = () => {
    this.setState({counter: this.state.counter - 1});
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>Counter: {this.state.counter}</p>
        <Button handleClick={this.handleIncrement} class="btn btn-primary">Increment</Button>
        <Button handleClick={this.handleDecrement} class="btn btn-danger">Decrement</Button>
      </div>
    )
  }
}

export default Counter;
