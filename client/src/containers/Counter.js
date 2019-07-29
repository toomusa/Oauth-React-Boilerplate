import React, { Component } from 'react';
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "../actions/"

class Counter extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Counter</h1>
        <p>Counter: {this.props.counter}</p>
        <button onClick={this.props.incrementCounter}>Increment</button>
        <button onClick={this.props.decrementCounter}>Decrement</button>
      </div>
    )
  }
}

function mapStateToProps(state){
  return { counter: state.counter.counter };
}

export default connect(mapStateToProps, { incrementCounter, decrementCounter })(Counter);
