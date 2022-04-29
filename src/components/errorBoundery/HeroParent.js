import React, { Component } from 'react';
import ErrorBoundery from './ErrorBoundery';
import HeroChild from './HeroChild';

class HeroParent extends Component {
  render() {
    return (
      <div>
        <ErrorBoundery>
          <HeroChild heroName="Batman" />
        </ErrorBoundery>

        <ErrorBoundery>
          <HeroChild heroName="Joker" />
        </ErrorBoundery>

        <ErrorBoundery>
          <HeroChild heroName="Anpanman" />
        </ErrorBoundery>
      </div>
    );
  }
}

export default HeroParent;
