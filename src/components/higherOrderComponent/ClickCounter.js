import React, { Component } from 'react';
import withCounter from './higherOrder';

class ClickCounter extends Component {
  render() {
    const { incrementCounter, count } = this.props;
    return (
      <div>
        <p>
          {count} name is {this.props.name}
        </p>
        <button type="button" onClick={incrementCounter}>
          Increment
        </button>
      </div>
    );
  }
}

export default withCounter(ClickCounter, 2);
