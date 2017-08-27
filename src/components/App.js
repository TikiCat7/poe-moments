import React, { Component } from 'react';
import '../styles/App.css';

import Topbar from './Topbar'
import LandingMainContent from './LandingMainContent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Topbar />
        <LandingMainContent />
      </div>
    );
  }
}

export default App;
