import React, { Component } from 'react';

class RefinWithoutChildComp extends Component {
  constructor(props) {
    super(props);
    this.inputRef1 = React.createRef();
    this.inputRef2 = React.createRef();
  }
  componentDidMount() {
    this.inputRef1.current.focus();
  }

  refHandler = () => {
    this.inputRef2.current.focus();
  };

  render() {
    return (
      <>
        <input type="text" placeholder="WithRef" ref={this.inputRef1} />
        <br />
        <input type="text" placeholder="With ref function" ref={this.inputRef2} />
        <button type="button" onClick={this.refHandler}>
          Focus ref2
        </button>
      </>
    );
  }
}

export default RefinWithoutChildComp;
