import React, { Component, Fragment } from 'react';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';

class App extends Component {
  render = () => (
    <Fragment>
      <Navbar />
      <MainContent />
    </Fragment>
  );
}

export default App;
