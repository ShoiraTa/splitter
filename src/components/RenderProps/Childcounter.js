import React, { Component } from 'react';

class Childcounter extends Component {
  render() {
    return <h1>{this.props.render(true)}</h1>;
  }
}

export default Childcounter;
