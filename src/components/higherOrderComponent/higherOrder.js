import React from 'react';

const withCounter = (WrappedComponent, incrementNumber) => {
  class WithComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    incrementCounter = () => {
      this.setState((prevstate) => {
        return { count: prevstate.count + incrementNumber };
      });
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCounter={this.incrementCounter}
          name="Shoira"
          {...this.props}
        />
      );
    }
  }
  return WithComponent;
};

export default withCounter;
