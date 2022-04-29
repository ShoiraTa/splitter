import React, { Component } from 'react';

class RefChild extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  inputFocus = () => {
    console.log(this.inputRef.current.value);
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}

export default RefChild;
