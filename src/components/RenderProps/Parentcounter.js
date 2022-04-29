import React, { Component } from 'react';
import Childcounter from './Childcounter';

class Parentcounter extends Component {
  render() {
    return <Childcounter render={(isLoggedin) => (isLoggedin ? 'Shoira' : 'Guest')} />;
  }
}

export default Parentcounter;
