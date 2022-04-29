import React, { Component } from 'react';
import withCounter from './higherOrder';

class HoverCounter extends Component {
  render() {
    const { incrementCounter, count } = this.props;
    return (
      <div>
        <p>
          {count}
          {this.props.name}
        </p>
        <button type="button" onMouseLeave={incrementCounter}>
          Increment
        </button>
      </div>
    );
  }
}

export default withCounter(HoverCounter, 3);
