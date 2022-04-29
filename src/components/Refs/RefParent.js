import React, { Component } from 'react';
import RefChild from './RefChild';

class RefParent extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleRef = () => {
    this.inputRef.current.inputFocus();
  };
  render() {
    return (
      <div>
        <RefChild ref={this.inputRef} />
        <button onClick={this.handleRef} type="text">
          Focus on Ref
        </button>
      </div>
    );
  }
}

export default RefParent;
