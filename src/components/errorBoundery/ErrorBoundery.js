import React, { Component } from 'react';

class ErrorBoundery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasEror: false,
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasEror: true,
    };
  }
  render() {
    if (this.state.hasEror) {
      return <h1>Something went wrong</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundery;
