import React, { Component, Fragment } from 'react';
import MainContent from './components/MainContent';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

class App extends Component {
  render = () => (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<MainContent />} />
      </Routes>
    </Router>
  );
}

export default App;
