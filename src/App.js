import React, { Component, Fragment } from 'react';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import ShoppingCart from './components/ShoppingCart';

class App extends Component {
  render = () => (
    <Fragment>
      <Navbar />
      <ShoppingCart />
    </Fragment>
  );
}

export default App;
