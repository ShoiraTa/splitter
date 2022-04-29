import React, { Component } from 'react';

class HeroChild extends Component {
  render() {
    if (this.props.heroName === 'Joker') {
      throw new Error('not a hero');
    }
    return <div>{this.props.heroName}</div>;
  }
}

export default HeroChild;
