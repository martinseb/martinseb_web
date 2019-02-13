import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div className="Home container">
        <div className="row">
          <div className="four columns homeImage">Photo Here</div>
          <div className="four columns homeText">
          I'm Martin, <br/>
          Web designer and developer.
          </div>
        </div>
      </div>
    );
  }
}
