import React, { Component } from 'react';
import './vendor/normalize.css';
import './vendor/skeleton.css';
import './App.scss';

import PlanetaryGears from './components/PlanetaryGears.jsx';
import Welcome from './components/Welcome.jsx';
import Navbar from './components/Navbar.jsx';
import AboutMe from './components/AboutMe.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import UnderConstruction from './components/UnderConstruction.jsx';

class App extends Component {
  render() {
    return (
      <div className="App" onScroll={() => this.handleScroll()}>
        <PlanetaryGears />
        <Welcome />
        <Navbar />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
        <UnderConstruction />
      </div>
    );
  }
}

export default App;
