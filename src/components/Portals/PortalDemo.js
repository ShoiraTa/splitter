import React, { Component } from 'react';
import { ReactDOM } from 'react-dom';

class PortalDemo extends Component {
  render() {
    return ReactDOM.createPortal(<div>PortalDemo</div>, document.getElementById('portal'));
  }
}

export default PortalDemo;
