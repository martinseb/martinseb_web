import React, { Component } from 'react';
import './vendor/normalize.css';
import './vendor/skeleton.css';
import './App.scss';

import Home from './components/Home.jsx';
import UnderConstruction from './components/UnderConstruction.jsx';
import PlanetaryGears from './components/PlanetaryGears.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PlanetaryGears />
        <UnderConstruction />
      </div>
    );
  }
}

export default App;
