import React, { Component } from 'react';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sticky: false,
      currentActive: -1
    };

    this.navbar = null;
    this.stickyPos = null;

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.stickyPos = this.navbar.offsetTop;
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    if (!this.state.sticky && this.navbar.getBoundingClientRect().top <= 0) {
      this.stickyPos = window.pageYOffset;
      this.setState({sticky: true});
    }
    else if (this.state.sticky && window.pageYOffset < this.stickyPos) {
      this.setState({sticky: false});
    }
  }

  render() {
    return (
      <header ref={nb => this.navbar = nb} className={"Navbar"+(this.state.sticky?" StickyNav":"")}>
        <div className="NavMenu">
          <a href="#UnderConstruction" className={"button About"+(this.state.currentActive === 0?" active":"")}>About Me</a>
          <a href="#UnderConstruction" className={"button Skills"+(this.state.currentActive === 1?" active":"")}>My skills</a>
          <a href="#UnderConstruction" className={"button Projects"+(this.state.currentActive === 2?" active":"")}>My Projects</a>
          <a href="#UnderConstruction" className={"button Contact"+(this.state.currentActive === 3?" active":"")}>Contact me!</a>
        </div>
      </header>
    );
  }
}

export default Navbar;
