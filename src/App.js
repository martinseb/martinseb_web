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
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 1200);
  }

  render() {
    return (
      <div className={"App"+(this.state.isLoading?" Hide":"")} onScroll={() => this.handleScroll()}>
        <PlanetaryGears isLoading={this.state.isLoading}/>
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
